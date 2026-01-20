import type {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {CaretLeft} from '@phosphor-icons/react/dist/ssr';

import {Background, Container} from '@/components/Background';
import {Header} from '@/components/Header';
import {config} from '@/config';

import classes from './About.module.css';

export const About: FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Background />
            <Container>
                <button className={classes.backButton} onClick={() => navigate('/')} aria-label="Go back to home">
                    <CaretLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <Header />
                <div className={classes.aboutContent}>
                    <h1>About Me</h1>
                    {config.aboutMe && <p>{config.aboutMe}</p>}
                </div>
            </Container>
        </>
    );
};
