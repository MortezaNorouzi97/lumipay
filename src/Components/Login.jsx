import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { PhoneOutlined } from "@ant-design/icons";


export default function Login() {
    const onFinish = (values) => {
        console.log(values);
    };

    const [form] = Form.useForm();
    const username = Form.useWatch('username', form);
    const password = Form.useWatch('password', form);
    const isDisabled = !username?.trim() || !password?.trim();

    return (
        <div className="login-container">

            <Card className='card'>

                <Form form={form} onFinish={onFinish}>

                    <Form.Item>
                        <div className='divLogoImg'>
                            <img className='logoImg' src={`${process.env.PUBLIC_URL}/lumipayIcon.png`} alt="lumipayIcon" />
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <div>
                            <div className='title1'>ورود به پنل LumiPay</div>
                            <div className='title2'>پنل مدیریت پذیرندگان</div>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <div className='loginPageHint1'>شماره موبایل *</div>
                    </Form.Item>

                    <Form.Item name="username" rules={[{ required: true }]}>
                        <Input placeholder="09xxxxxxxxx" prefix={<PhoneOutlined style={{ color: "gray" }} />} />
                    </Form.Item>

                    <Form.Item>
                        <div className='loginPageHint2'>شماره موبایل ثبت شده در سیستم را وارد کنید</div>
                    </Form.Item>

                    <Form.Item>
                        <div className='loginPageHint3'>رمز عبور *</div>
                    </Form.Item>

                    <Form.Item name="password" rules={[{ required: true }]}>
                        <Input.Password className='form-item-password' placeholder="حداقل 6 کاراکتر" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block className='submit' disabled={isDisabled}>ورود به پنل</Button>
                    </Form.Item>

                    <Form.Item>
                        <a href="" className='forgotPass'>رمز عبور خود را فراموش کرده‌اید؟</a>
                    </Form.Item>

                </Form>

                <Form>
                    <Form.Item className='value'>
                        <div>
                            <div>حساب‌های تست:</div>
                            <div>• Owner: 09121234567 | رمز: 123456</div>
                            <div>• Finance: 09129876543 | رمز: 123456</div>
                            <div>• Cashier: 09123456789 | رمز: 123456</div>
                            <div>• حساب معلق: 09111111111 | رمز: 123456</div>
                        </div>
                    </Form.Item>
                </Form>

            </Card>

        </div>
    );
}