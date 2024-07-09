"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { Input, Button, Spacer } from '@nextui-org/react';
import { redirectGoogleAuth } from '@/common/api/sso/google/redirectGoogleAuth';

const FormLogin = () => {
    return (
        <div style={{ maxWidth: '500px', padding: '20px', textAlign: 'center' }}>
            <Spacer y={1} />
            <Input
                isClearable
                fullWidth
                color="primary"
                placeholder="Email"
            />
            <Spacer y={1} />
            <Input
                isClearable
                fullWidth
                color="primary"
                placeholder="Password"
            />
            <Spacer y={1.5} />
            <Button
                color="primary"
                fullWidth
            >
                Login
            </Button>
            <Spacer y={0.5} />
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Button
                    style={{
                        backgroundColor: '#4285F4',
                        padding: '12px 24px',
                        borderRadius: '50px',
                        margin: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={redirectGoogleAuth}
                >
                    <FontAwesomeIcon icon={faGooglePlusG} color="white" fontSize="20px" />
                </Button>
            </div>
        </div>
    );
};

export default FormLogin;
