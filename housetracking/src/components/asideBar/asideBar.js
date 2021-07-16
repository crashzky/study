import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {connect} from 'react-redux';

const AsideBar = ({type, activeState}) => {
    
    const getInfo = () => {
        switch(type) {
            case 'house':
                return getHouseInfo();
            default:
                return null;
        }
    };
    
    const getHouseInfo = () => {
        switch(activeState) {
            case 0:
                return {
                    title: 'Подготовка',
                    tasks: [
                        'Создание защитного ограждения',
                        'Снос и демонтаж старых построек',
                        'Перенос инженерных сетей',
                        'Создание временных коммуникаций, дорог',
                        'Сооружение временных бытовых построек и пр.'
                    ],
                    isReady: true
                }
            case 1:
                return {
                    title: 'Основание и фундамент',
                    tasks: [
                        'Фундамент переносит тяжесть с дома на грунт, не позволяет строению деформироваться и смещаться'
                    ],
                    isReady: true
                }
            case 2:
                return {
                    title: 'Возведение стен',
                    tasks: [
                        'На этом этапе устанавливаются несущие стены'
                    ],
                    isReady: true
                }
            case 3:
                return {
                    title: 'Кровля и наружные стены',
                    tasks: [
                        'Монтаж кровли здания',
                        'Возведение наружных стен',
                        'Монтаж оконных конструкций'
                    ],
                    isReady: true
                }
            case 4:
                return {
                    title: 'Инженерные сети',
                    tasks: [
                        'Прокладка газопровода, отопления, электролиний',
                        'Прокладка канализации',
                        'Обустройство систем освещения'
                    ],
                    isReady: false
                }
            case 5:
                return {
                    title: 'Внутренняя отделка',
                    tasks: [
                        'Отделка квартир',
                        'Отделка подъездов',
                        'Отделка пожарных лестниц'
                    ],
                    isReady: false
                }
            case 6:
                return {
                    title: 'Благоустройство территории',
                    tasks: [
                        'Строительство детских площадок',
                        'Строительство парковки'
                    ],
                    isReady: false
                }
            default:
                return null;
        }
    };

    const createLis = () => {
        let lis = [];
        
        switch(type) {
            case 'house':
                lis = getInfo().tasks.map((el, i) => <Li key={i}>{el}</Li>);
                break;
            default:
                return null;
        }

        return lis;
    };

    const createDates = () => {
        if(type === 'house') {
            return (
                <>
                    <Title>Сроки выполнения</Title>
                    <ul>
                        <Li>{getInfo().isReady ? 'Застройщик соответсвует графику' : 'Застройщик не приступил к этому этапу'}</Li>
                    </ul>
                </>
            );
        }
    };

    const Title = styled.p`
        font-weight: 600;
        font-size: 22px;
        margin-bottom: 2px;
    `;

    const Li = styled.li`
        font-weight: 500;
        font-size: 20px;
        color: #717784;
    `;

    return (
        <div className={css`
            position: absolute;
            left: 0;
            top: 70px;
            width: 470px;
            padding: 30px 40px;
            border-radius: 36px;
            background: white;
        `}>
            <Title>{getInfo().title}</Title>
            <ul>
                {createLis()}
            </ul>
            {createDates()}
        </div>
    );
};

const mapStateToProps = ({activeState}) => ({
    activeState
});

AsideBar.propTypes = {
    type: PropTypes.oneOf(['house', 'cam']),
    activeState: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6])
};

export default connect(mapStateToProps)(AsideBar);