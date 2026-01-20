import type {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {BookmarkSimple} from '@phosphor-icons/react/dist/ssr';

import {Background, Container} from '@/components/Background';
import {Header} from '@/components/Header';
import {LinksList} from '@/components/LinksList';

import classes from './Home.module.css';

export const Home: FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Background />
            <Container>
                <button className={classes.aboutButton} onClick={() => navigate('/about')} aria-label="Go to about page">
                    <BookmarkSimple size={20} />
                    <span>About Me</span>
                </button>
                <Header />
                <LinksList />
            </Container>
        </>
    );
};
