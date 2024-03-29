import React from 'react';

import whastsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import api from '../../services/api';

export interface Teacher {
        name: string,
        avatar: string,
        whatsapp: string,
        bio: string
        subject: string,
        cost: number,
        id: number
    };


interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('/connections', {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name} />
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        
        <p>{teacher.bio}</p>

        <footer>
            <p>
                Preço/Hora
                <strong>{teacher.cost}</strong>
            </p>
            <a target="_blank" onClick={createNewConnection} href={`http://wa.me/${teacher.whatsapp}`}>
                <img src={whastsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </a>
        </footer>

    </article>
    );
}

export default TeacherItem;