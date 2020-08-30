import React, { useCallback, useRef, useState, useEffect} from 'react';
import { /* FiLogIn, FiMail, FiLock,  */FiDollarSign } from 'react-icons/fi';
import api from '../../services/api';


import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {/* Link,  */useHistory} from 'react-router-dom'


import * as Yup from 'yup';


import { Container, Content, MainContent, Infos} from './styles';

import {useToast} from '../../hooks/toast'
import getValidationErrors from '../../utils/getValidationErrors'


import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';
/* import apiMercadopago from '../../services/apiMercadopago' */

import Input from '../../components/input';
import Button from '../../components/button';
import AsyncSelect from '../../components/asyncSelect'

interface DonationFormData {
    moneyAmount: number;
    marcadoOptions: marcadoOptions[];
}

interface Supplier {
    id: string;
    name: string;
}

interface marcadoOptions {
    value: string;
    label: string;
}

const DirectDonation: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const [suppliers, setSuppliers] = useState<Supplier []>([]);


    /* const {signIn} = useAuth(); */

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

    const handleSubmit = useCallback(async (data: DonationFormData) => {
		try {
            formRef.current?.setErrors({})

			const schema = Yup.object().shape({
				number: Yup.number()
                    .required('É obrigatório digitar um valor numérico'),
                marcadoOptions: Yup.string().required('É obrigatório escolher um mercado')

			});

			await schema.validate(data, {
				abortEarly: false
            });

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
    }, [/* signIn,  */addToast, history]);



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
                    <AsyncSelect name="mercado1" options= {marcadoOptions}/>
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
