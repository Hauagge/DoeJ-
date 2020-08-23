import React, { useCallback, useRef} from 'react';
import { /* FiLogIn, FiMail, FiLock,  */FiDollarSign } from 'react-icons/fi';



import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {/* Link,  */useHistory} from 'react-router-dom'


import * as Yup from 'yup';


import { Container, Content, MainContent/* , Infos */} from './styles';

import {useToast} from '../../hooks/toast'
/* import {useAuth} from '../../hooks/auth' */
import getValidationErrors from '../../utils/getValidationErrors'


import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';
/* import apiMercadopago from '../../services/apiMercadopago' */

import Input from '../../components/input';
import Button from '../../components/button';

interface DonationFormData {
    moneyAmount: number;
    /* password: string; */
}

const DirectDonation: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    /* const {signIn} = useAuth(); */
    const history = useHistory();


    const {addToast} = useToast();

    const handleSubmit = useCallback(async (data: DonationFormData) => {
		try {
            formRef.current?.setErrors({})

			const schema = Yup.object().shape({
				number: Yup.number()
					.required('É obrigatório digitar um valor numérico')
				/* password: Yup.string().required('Senha obrigatória') */
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
                title: 'Erro na autenticação',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais'
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
{/* Inicio do formulario de preenchimento, dá pra usar as coisaas prontas mais pra frente (input por exemplo)*/}
                    <Form ref = {formRef}onSubmit={handleSubmit}>

                    <Input name="moneyAmount" icon={FiDollarSign} placeholder="Quanto deseja doar" />
                    {/* <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    /> */}

                    <label>
                        Escolha em qual mercado deve ser retirado a doação: &nbsp;
                        <select>

                            <option selected value="Selecionar">Selecionar</option>
                            <option value="Mercado1">Mercado1</option>
                            <option value="Mercado2">Mercado2</option>
                            <option value="Mercado3">Mercado3</option>
                        </select>
                    </label>

                    <Button type="submit">DOAR ♡</Button>

			        </Form>
                    {/* <Infos>
                        <input type="text" name="moneyAmount" placeholder="Quanto deseja doar?"/>

                            <label>
                                Escolha em qual mercado deve ser retirado a doação: &nbsp;
                                <select>

                                    <option selected value="Selecionar">Selecionar</option>
                                    <option value="Mercado1">Mercado1</option>
                                    <option value="Mercado2">Mercado2</option>
                                    <option value="Mercado3">Mercado3</option>
                                </select>
                            </label>
                            <button>DOAR ♡</button>
                    </Infos> */}

				</MainContent>
			</Content>
		</Container>
	);
};

export default DirectDonation;
