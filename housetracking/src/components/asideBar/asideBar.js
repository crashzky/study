import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import {connect} from 'react-redux';

import Cam1_1 from '../../assets/camsVideo/cam_1_1.png';
import Cam2_1 from '../../assets/camsVideo/cam_2_1.png';
import Cam3_1 from '../../assets/camsVideo/cam_3_1.png';
import Cam3_2 from '../../assets/camsVideo/cam_3_2.png';
import Cam3_3 from '../../assets/camsVideo/cam_3_3.png';
import Cam4_1 from '../../assets/camsVideo/cam_4_1.png';
import Cam4_2 from '../../assets/camsVideo/cam_4_2.png';
import Cam4_3 from '../../assets/camsVideo/cam_4_3.png';
import Cam6_4 from '../../assets/camsVideo/cam_6_4.png';
import Cam6_5 from '../../assets/camsVideo/cam_6_5.png';
import Cam6_6 from '../../assets/camsVideo/cam_6_6.png';
import Cam7_1 from '../../assets/camsVideo/cam_7_1.png';
import Cam7_2 from '../../assets/camsVideo/cam_7_2.png';
import Cam7_3 from '../../assets/camsVideo/cam_7_3.png';

const AsideBar = ({type, activeState}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const getInfo = () => {
        switch(type) {
            case 'house':
                return getHouseInfo();
            case 'cams':
                    return getCamsInfo();
            default:
                return null;
        }
    };

    const getCamsInfo = () => {
        switch(activeState) {
            case 0:
                return {
                    title: 'Камеры',
                    buttons: [
                        {
                            title: 'Вид сбоку',
                            image: Cam1_1
                        }
                    ]
                };
            case 1:
                return {
                    title: 'Камеры',
                    buttons: [
                        {
                            title: 'Вид сверху',
                            image: Cam2_1
                        }
                    ]
                };
            case 2:
                return {
                    title: 'Камеры',
                    buttons: [
                        {
                            title: 'Вид сверху',
                            image: Cam3_2
                        },
                        {
                            title: 'Вид сбоку',
                            image: Cam3_1
                        },
                        {
                            title: 'Вид сбоку',
                            image: Cam3_3
                        }
                    ]
                };
            case 3:
                return {
                    title: 'Камеры',
                    buttons: [
                        {
                            title: 'Вид сверху',
                            image: Cam4_1
                        },
                        {
                            title: 'Вид сбоку',
                            image: Cam4_2
                        },
                        {
                            title: 'Вид сбоку',
                            image: Cam4_3
                        }
                    ]
                };
            case 4:
                    return {
                        title: 'Камеры',
                        buttons: [
                            {
                                title: 'Вид сверху',
                                image: Cam4_1
                            },
                            {
                                title: 'Вид сбоку',
                                image: Cam4_2
                            },
                            {
                                title: 'Вид сбоку',
                                image: Cam4_3
                            }
                        ]
                    };
            case 5:
                return {
                    title: 'Камеры',
                    buttons: [
                        {
                            title: 'Вид сверху',
                            image: Cam4_1
                        },
                        {
                            title: 'Вид сбоку',
                            image: Cam4_2
                        },
                        {
                            title: 'Вид сбоку',
                            image: Cam4_3
                        },
                        {
                            title: 'Подъезд',
                            image: Cam6_4
                        },
                        {
                            title: 'Подъезд',
                            image: Cam6_5
                        },
                        {
                            title: 'Подъезд',
                            image: Cam6_6
                        }
                    ]
                };
            case 6:
                return {
                    title: 'Камеры',
                    buttons: [
                        {
                            title: 'Вид сверху',
                            image: Cam7_3
                        },
                        {
                            title: 'Внутренний двор',
                            image: Cam7_1
                        },
                        {
                            title: 'Набережная',
                            image: Cam7_2
                        }
                    ]
                };
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
                lis = getHouseInfo().tasks.map((el, i) => <Li key={i}>{el}</Li>);
                break;
            case 'cams':
                lis = getCamsInfo().buttons.map((el, i) => (
                    <ol>
                        <Button onClick={() => {
                            setModalImage(el.image);
                            setModalOpen(!modalOpen);
                        }} key={i}>{el.title}</Button>
                    </ol>
                ));
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

    const Button = styled.button`
        border: none;
        outline: none;
        background: #F5F5F5;
        border-radius: 15px;
        padding: 2px 30px;
        font-weight: 500;
        font-size: 22px;
        margin-bottom: 10px;
    `;

    return (
        <div>
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
            <Modal size='lg' isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
                <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Онлайн трансляция</ModalHeader>
                <ModalBody>
                    <img src={modalImage} alt='Онлайн трансляция' className={css`
                        width: 100%;
                        object-fit: cover;
                    `}/>
                </ModalBody>
            </Modal>
        </div>
    );
};

const mapStateToProps = ({activeState}) => ({
    activeState
});

AsideBar.propTypes = {
    type: PropTypes.oneOf(['house', 'cams']),
    activeState: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6])
};

export default connect(mapStateToProps)(AsideBar);