'use client'

import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Heading from '../Products/Heading/Heading';
import CustomInput from '../CustomInputs/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import toast from 'react-hot-toast';
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation';

const AuthModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [isLoading, setIsLoading] = useState(false)

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const toggleForm = () => {
        setIsLoginForm(prevState => !prevState);
    };
    
    const {register , handleSubmit, formState:{errors}} = useForm<FieldValues>({
        defaultValues: {
            name:'',
            email:'',
            password:'',
        }
    })

    const router = useRouter()

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        axios.post('/api/register', data ).then(() => {
            toast.success('Аккаунт создан')
            signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false,
            }).then((callback) =>{
                if(callback?.ok){
                    router.push('/cart')
                    router.refresh()
                    toast.success('Вы вошли')
                }
                if(callback?.error){
                    toast.error(callback.error)
                }
            })
        }).catch(() => toast.error("Что-то пошло не так")).finally(() => {
            setIsLoading(false)
        })
    }

    const errorMessages = {
        email: 'Неправильно введенный email',
        phone: 'Неправильный формат номера телефона'
    };

    return ( 
        <div>
            <button onClick={openModal}>User</button>
            <Modal
            className='modal'
            open={showModal}
            onClose={closeModal}
            aria-labelledby="auth-modal-title"
            aria-describedby="auth-modal-description"
            >
                <div className='modal__content'>
                    <div className='auth-form'>
                        {isLoginForm ? (
                            <>
                                <div className='auth-form__header'>
                                    <Heading title="Вход" center/>
                                    <IoMdClose size={30} onClick={closeModal}/>
                                </div>
                                <CustomInput
                                id="email"
                                label="Почта/Email"
                                type="email"
                                pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                errorMessages={errorMessages}
                                required
                                />
                                <CustomInput
                                id="password"
                                label="Пароль"
                                type="password"
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                errorMessages={errorMessages}
                                minLength={5}
                                required
                                />
                                <CustomButton disabled={isLoading} label={isLoading ? 'Загрузка' : 'Войти'} onClick={handleSubmit(onSubmit)}/>
                                <p className='auth-form__message'>У вас уже есть аккаунта? <button className='auth-form__message-button' onClick={toggleForm}>Зарегистрироваться</button></p>
                            </>   
                        ):(
                            <>
                                <div className='auth-form__header'>
                                    <Heading title="Регистрация" center/>
                                    <IoMdClose size={30} onClick={closeModal}/>
                                </div>
                                <CustomInput
                                id="name"
                                label="Имя"
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                errorMessages={errorMessages}
                                required
                                />
                                <CustomInput
                                id="email"
                                label="Почта/Email"
                                type="email"
                                pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                errorMessages={errorMessages}
                                required
                                />
                                <CustomInput
                                id="password"
                                label="Пароль"
                                type="password"
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                errorMessages={errorMessages}
                                minLength={5}
                                required
                                />
                                <CustomButton disabled={isLoading} label={isLoading ? 'Загрузка' : 'Зарегистрироваться'} onClick={handleSubmit(onSubmit)}/>
                                <p className='auth-form__message'>У вас уже есть аккаунта? <button className='auth-form__message-button'  onClick={toggleForm}>Войти</button></p>
                            </> 
                        )}
                    </div>
                </div>
            </Modal>
        </div>
     );
}
 
export default AuthModal;