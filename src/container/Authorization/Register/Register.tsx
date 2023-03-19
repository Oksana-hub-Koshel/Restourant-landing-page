import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import "./Registration.css"

interface ModalProps {

    title: string,
    onClose: () => void
}

export const Register = ({ title, onClose}: ModalProps) => {

    const [active, setActive] = useState(false);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: "onBlur" });

    const onSubmit = () => {
        // console.log(JSON.stringify(data));
        reset();
    };
    return (
        <>
            <div style={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                position: "fixed",
                background: "black",
                opacity: 0.6
            }}
                 onClick={onClose}
            ></div>

            <div style={{
                // background: "white",
                width: 700,
                height:"32vw",
                position: "absolute",
                top: 110,
                translate: 200,
                borderRadius: 10,
                left: 150
            }}>

                <div className="container_block">
                    <div className="wrapper_block">
                        <div className="form_container">
                            <div className="header">
                                <div className="sign_in">
                                    <a onClick={() => setActive(false)}>Login</a>
                                </div>
                                <div className="sign_out">
                                    <a onClick={() => setActive(true)}>Registration</a>
                                </div>
                            </div>
                            <form
                                className={!active ? "form_container" : "form_container2"}
                                onSubmit={handleSubmit(onSubmit)}
                                autoComplete="off"
                            >
                                <div className="input_row1">
                                    {active ? <label>Username</label> : <label>Username</label>}
                                    <input
                                        {...register("username", {
                                            required: "Field is not required",
                                            minLength: {
                                                value: 3,
                                                message: "At least 3 characters",
                                            },
                                        })}
                                    />
                                    {/*<div className={s.error}>{errors?.username?.message}</div>*/}
                                </div>

                                <div className="input_row2">
                                    {active ? <label>Password</label> : <label>Password</label>}

                                    <input
                                                {...register("password", {
                                                    required: "Field is not required",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Password must have at least 8 characters",
                                                    },
                                                    pattern: {
                                                        value: /(?=.*[A-Z])/g,
                                                        message:
                                                            "Password must contain at least one capital letter ",
                                                    },
                                                })}
                                            />
                                            {/*<div className={s.error}>{errors?.password?.message}</div>*/}


                                </div>
                                {active ? (
                                    <div className="input_row">
                                        <label>Email Address</label>
                                        <input
                                            {...register("email", {
                                                required: "ПField is not required",
                                                pattern: {
                                                    value:
                                                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: " Incorrect email",
                                                },
                                            })}
                                        />
                                        {/*<div className={s.error}>{errors?.email?.message}</div>*/}
                                    </div>
                                ) : (
                                    <div className="form_group">
                                        <input type="checkbox" />
                                        <p>Keep Me Signed In</p>
                                    </div>
                                )}

                                {active ? (
                                    <div className="btn">
                                        <input
                                            type="submit"
                                            value="Registration"
                                            className="reg_btn"
                                            disabled={!isValid}
                                        />
                                    </div>
                                ) : (
                                    <>
                                    <div className="btn">
                                        <input
                                            type="submit"
                                            value="Sign In"
                                            className="reg_btn"
                                            disabled={!isValid}
                                        />
                                    </div>
                                    <div className="forgot_pass">
                                        <button type="submit" className="btn_forgot">
                                            Forgot Password
                                        </button>
                                    </div>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

