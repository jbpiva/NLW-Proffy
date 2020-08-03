import React from 'react';

import whastsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://scontent.fcgh4-1.fna.fbcdn.net/v/t1.0-9/58591329_618065695327366_410839541990031360_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeEEAzFFBQqoqgga5kdu4EOBv5IegUNesdO_kh6BQ16x0-scoSZtlfGvJOOpelbXkUXjoiBsOmEvfBP_HlE-7zVp&_nc_ohc=TGEZ2MdFnvYAX-Y2QXC&_nc_ht=scontent.fcgh4-1.fna&oh=53d5279979b8f1619b3c43245dda401f&oe=5F4D4B8D" alt="Juan Piva" />
            <div>
                <strong>Juan Piva</strong>
                <span>Química</span>
            </div>
        </header>
        
        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por explodir as coisas em laboratório e por mudar a vida das pessoas atráves de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$80,00</strong>
            </p>
            <button type="button">
                <img src={whastsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>

    </article>
    );
}

export default TeacherItem