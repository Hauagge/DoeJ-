import React, { useCallback, useRef} from 'react';
import { /* FiLogIn, FiMail, FiLock,  */FiDollarSign } from 'react-icons/fi';



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
    /* password: string; */
}

const DirectDonation: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    /* const {signIn} = useAuth(); */
    const history = useHistory();


    const {addToast} = useToast();

    const mercadoOptions = [
        {value: 'Muffato', label:'Muffato-Max'},
        {value: 'Parana', label:'Parana Centro'},
        {value: 'Carreira', label:'Super Carreira'},
        {value: 'Condor', label:'Condor Saida'},

    ]

    const handleSubmit = useCallback(async (data: DonationFormData) => {
		try {
            formRef.current?.setErrors({})

			const schema = Yup.object().shape({
				number: Yup.number()
					.required('É obrigatório digitar um valor numérico')
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
                title: 'Erro no valor',
                description: 'Digite um valor correto'
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

                    <AsyncSelect name="mercado1" options= {mercadoOptions}/>

                    <Button type="submit">DOAR ♡</Button>


                    </Infos>
                    </Form>
				</MainContent>
			</Content>
		</Container>
	);
};

export default DirectDonation;
