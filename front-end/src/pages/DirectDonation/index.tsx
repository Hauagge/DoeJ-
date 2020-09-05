import React, { useCallback, useRef, useState, useEffect} from 'react';
import { /* FiLogIn, FiMail, FiLock,  */FiDollarSign } from 'react-icons/fi';
import api from '../../services/api';


import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {useHistory} from 'react-router-dom'


import * as Yup from 'yup';


import { Container, Content, MainContent, Infos} from './styles';

import {useToast} from '../../hooks/toast'
import getValidationErrors from '../../utils/getValidationErrors'


import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';

import Input from '../../components/input';
import Button from '../../components/button';
import AsyncSelect from '../../components/asyncSelect'
import { useAuth } from '../../hooks/auth';

interface DonationFormData {
    moneyAmount: number;
    chosenMarket: string;
}

interface Supplier {
    id: string;
    name: string;
}

interface marcadoOptions {
    value: string;
    label: string;
}

/* interface DonationInfos {
    value: number;
    supplier_id: string;
} */

/* interface valueInfo {
    value: number;
}

interface supplierInfo {
    supplier_id: string
} */

const DirectDonation: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const [suppliers, setSuppliers] = useState<Supplier []>([]);
/*     const [valueInfo, setValueInfo] = useState<valueInfo []>([]);
    const [supplierInfo, setSupplierInfo] = useState<supplierInfo []>([]); */


    const {user} = useAuth();

    const history = useHistory();

    const {addToast} = useToast();

    useEffect(() =>  {
        async function loadMarkets(): Promise<void>{
            const response = await api.get('/suppliers');

            const { data } = response

            setSuppliers(data)


        }
        loadMarkets()
    }, []);

    const marcadoOptions:marcadoOptions[] = suppliers.map(supplier=>{

        return {
            value: supplier.id,
            label: supplier.name
        }

        })

    const callMercadoPago = useCallback(async ({value, supplier_id}) => {
/*         console.log(value);
        console.log(supplier_id); */
        const response = await api.post(`/directdonation/${user.id}`, {
            value,
            supplier_id
        });

        console.log(response.data);
        /* setValueInfo(value)
        setSupplierInfo(supplier_id) */
    }, [user.id]);

    const handleSubmit = useCallback(async (data: DonationFormData) => {
        console.log(data.chosenMarket);
        console.log(data.moneyAmount);
		try {
            formRef.current?.setErrors({})

			const schema = Yup.object().shape({
				moneyAmount: Yup.number().required('É necessário preencher este campo').integer('Deve ser um valor inteiro e numérico').typeError('É necessário digitar um valor numérico'),
                chosenMarket: Yup.string().required('É obrigatório escolher um mercado')

			});

			await schema.validate(data, {
				abortEarly: false
            });

            await callMercadoPago({
                value: data.moneyAmount,
                supplier_id: data.chosenMarket,

            })
            /* await signIn({
                email: data.email,
                password: data.password,

            }) */;

            history.push('/receipt')
		} catch (err) {
            if(err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err)

                formRef.current?.setErrors(errors)

                return;
            }

            addToast({
                type: 'error',
                title: 'Erro na doação',
                description: 'Ocorreu um erro ao fazer a doação, tente novamente'
            });
		}
    }, [/* signIn,  */callMercadoPago, addToast, history]);



	return (
		<Container>
			<Header />
			<Content>
				<SideMenu />
				<MainContent>
                    <div>
                        <h1>
                            DOAÇÕES DIRETAS
                        </h1>
                    </div>
                    <Form ref = {formRef}onSubmit={handleSubmit}>
                    <Infos>


                    <Input name="moneyAmount" icon={FiDollarSign} placeholder="Quanto deseja doar" />

                    <div>
                    <label>Em qual mercado será retirada a sua doação?</label>
                    <AsyncSelect name="chosenMarket" options= {marcadoOptions}/>
                    </div>


                    <Button type="submit">DOAR ♡</Button>


                    </Infos>
                    </Form>
				</MainContent>
			</Content>
		</Container>
	);
};

export default DirectDonation;
