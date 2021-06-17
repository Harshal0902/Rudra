import React from 'react'
import { useHistory } from 'react-router';
import LanguageCard from '../Components/LanguageCard'
const languages = [
    {
        id: 0,
        lang: 'English',
        brandText: 'RUDRA',
        commentText: 'To open Rudra Web Application in English language', dataIcon: 'Aa'
    }, {
        id: 1,
        lang: 'ಕನ್ನಡ',
        brandText: 'ರುದ್ರ',
        commentText: 'ರುದ್ರ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್ ಅನ್ನು ಇಂಗ್ಲಿಷ್ ಭಾಷೆಯಲ್ಲಿ ತೆರೆಯಲು', dataIcon: 'ಎ'
    }, {
        id: 2,
        lang: '',
        brandText: 'Other languages',
        commentText: 'Other languages comming soon...',
        dataIcon: 'Aअ'
    }];


export default function Home() {
    const history = useHistory()

    const push = (lang) => {
        console.log('clickable')
        if (lang === 'en')
            history.push('/English');
        else
            history.push('/Kannada')
    }
    return (

        <div id='home'>
            <LanguageCard props={languages[0]} onClick={() => push('en')} />
            <LanguageCard props={languages[1]} onClick={() => push('ka')} />
            <LanguageCard props={languages[2]} />
        </div >
    )
}