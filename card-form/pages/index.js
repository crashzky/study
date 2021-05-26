import Head from 'next/head';
import styled from '@emotion/styled'
import {css} from '@emotion/css';
import {useRef, useState, useEffect} from 'react';

export default function Main() {
    const rowRef = useRef();
    const frontRef = useRef();
    const backRef = useRef();

    const inputNumberRef = useRef();
    const inputSpansRef = useRef();

    const inputHolderRef = useRef();

    const inputCvvRef = useRef();

    const [editedField, setEditedField] = useState();
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [cardMonth, setCardMonth] = useState('');
    const [cardYear, setCardYear] = useState('');
    const [cardCvv, setCardCvv] = useState('');

    const [payLogo, setPayLogo] = useState('/visa.png');
    const payLogoRef = useRef();

    useEffect(() => {
        switch(editedField) {
            case 0:
                inputNumberRef.current.focus();
                let span = inputSpansRef.current.children[cardNumber.length - 1];

                //select animation target
                if(cardNumber.length - 1 >= 4) { //for second four
                    span = inputSpansRef.current.children[cardNumber.length];
                }
                if(cardNumber.length - 1 >= 8) { //for thirt four
                    span = inputSpansRef.current.children[cardNumber.length + 1];
                }
                if(cardNumber.length - 1 >= 12) { //for last four
                    span = inputSpansRef.current.children[cardNumber.length + 2];
                }
                
                //add animation
                if(span) {
                    span.style = 'transform: translateY(-15px);';
                    setTimeout(() => span.style = {}, 150);
                }

                //add spaces to input
                inputNumberRef.current.value = inputNumberRef.current.value.replaceAll(' ', '');
                if(inputNumberRef.current.value.length > 12) {
                    inputNumberRef.current.value = inputNumberRef.current.value.substring(0, 4) + ' ' + inputNumberRef.current.value.substring(4, 8) + ' ' + inputNumberRef.current.value.substring(8, 12) + ' ' + inputNumberRef.current.value.substring(12);
                } else if (inputNumberRef.current.value.length > 8) {
                    inputNumberRef.current.value = inputNumberRef.current.value.substring(0, 4) + ' ' + inputNumberRef.current.value.substring(4, 8) + ' ' + inputNumberRef.current.value.substring(8);
                } else if (inputNumberRef.current.value.length > 4) {
                    inputNumberRef.current.value = inputNumberRef.current.value.substring(0, 4) + ' ' + inputNumberRef.current.value.substring(4);
                }

                //switch pay logo
                if(inputNumberRef.current.value.startsWith('2')) {
                    setPayLogo('/mir.png');
                } else if(inputNumberRef.current.value.startsWith('30') || inputNumberRef.current.value.startsWith('36') || inputNumberRef.current.value.startsWith('38')) {
                    setPayLogo('/dinner_club.png');
                } else if(inputNumberRef.current.value.startsWith('31') || inputNumberRef.current.value.startsWith('35')) {
                    setPayLogo('/jcb.png');
                } else if(inputNumberRef.current.value.startsWith('34') || inputNumberRef.current.value.startsWith('37')) {
                    setPayLogo('/american_express.png');
                } else if(inputNumberRef.current.value.startsWith('5') || inputNumberRef.current.value.startsWith('63') || inputNumberRef.current.value.startsWith('67')) {
                    setPayLogo('/maestro_mastercard.png');
                } else if(inputNumberRef.current.value.startsWith('60')) {
                    setPayLogo('/discover.png');
                } else if(inputNumberRef.current.value.startsWith('62')) {
                    setPayLogo('/union_pay.png');
                } else {
                    setPayLogo('/visa.png');
                }

                break;
            case 1:
                inputHolderRef.current.focus();
                break;
            case 2:
                fastToBack();
                inputCvvRef.current.focus();
                break;
        }
    }, [cardNumber, cardHolder, cardCvv]);

    useEffect(() => {
        //animation
        payLogoRef.current.style = 'transform: translateY(-15px);';
        setTimeout(() => payLogoRef.current.style = '', 200);

        inputNumberRef.current.focus()
    }, [payLogo]);

    //#region main
    const Background = styled.div`
        background: #ddeefc;
        width: 100vw;
        height: 100vh;
    `;

    const CardForm = styled.div`
        width: 570px;
        height: 697px;
    `;

    const CardBackGround = styled.div`
        width: 100%;
        height: 557px;
        border-radius: 10px;
        padding-top: 150px;
    `;
    //#endregion
    
    //#region front
    const CardRow = styled.div`
        transition: all 1s;
        transform: perspective(2000px) rotateY(0);
        width: 100%;
        height: 270px;
        z-index: 2;
    `;

    const Card = styled.div`
        width: 470px;
        height: 270px;
    `;

    const ImgContainer = styled.div`
        filter: brightness(80%);
    `;
    
    const ContentContainer = styled.div`
        padding: 25px 25px;
        width: 470px;
        z-index: 2;
    `;

    const SecondLine = styled.div`
        margin-top: 50px;
    `;

    const Span = styled.span`
        font-weight: 500;
        line-height: 1;
        color: white;
        font-size: 27px;
        display: block;
        transition: all .2s ease-in-out;
    `;

    const Space = styled.span`
        margin: 0 10px;
    `;

    const ThirdLine = styled.div`
        margin-top: 40px;
    `;

    const LabelThird = styled.div`
        color: white;
        opacity: 0.7;
        font-size: 18px;
    `;

    const BottomText = styled.label`
        cursor: pointer;
        color: white;
        font-size: 18px;
        font-weight: 500;
    `;

    //#endregion

    //#region back
    
    const SideLine = styled.div`
        margin-top: 30px;
        height: 50px;
        background: rgba(0, 0, 19, .8);
    `

    const CvvTitle = styled.div`
        padding-right: 15px;
        font-size: 17px;
        font-weight: 500;
        transform: rotateY(180deg);
        color: white;
    `

    const CvvLine = styled.div`
        background: white;
        height: 45px;
        margin-bottom: 30px;
        transform: rotateY(180deg);
    `;
    
    //#endregion

    function rotateToBack() {
        rowRef.current.style = 'transform: perspective(2000px) rotateY(180deg);';
        setTimeout(() => {
            frontRef.current.style = 'z-index: 1;';
            backRef.current.style = 'z-index: 2;';
        }, 240);
    }

    function fastToBack() {
        rowRef.current.style = 'transition: all 0; transform: perspective(2000px) rotateY(180deg);';
        frontRef.current.style = 'z-index: 1;';
        backRef.current.style = 'z-index: 2;';

        rowRef.current.style = 'transform: perspective(2000px) rotateY(180deg);';
    }

    function rotateToFront() {
        rowRef.current.style = 'transform: perspective(2000px) rotateY(0deg);';
        setTimeout(() => {
            frontRef.current.style = 'z-index: 2;';
            backRef.current.style = 'z-index: 1;';
        }, 240);
    }

    function getCardNum(i) {
        if(cardNumber.length <= i) 
            return '#';
        else if (i >= 4 && i <= 11) 
            return '*';
        else 
            return cardNumber.substr(i, 1);
        
    }

    return (
              <>
                  <Head>
                      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"/>
                      <title>Card master</title>
                  </Head>
                  <Background className='d-flex justify-content-center align-items-center'>
                      <CardForm className='position-relative'>
                          <CardRow ref={rowRef} className='position-relative d-flex justify-content-center'>
                              {/*card front*/}
                              <Card ref={frontRef} style={{
                                  zIndex: 2
                              }} className='position-absolute'>
                                  <div className='position-relative'>
                                      <ContentContainer className='position-absolute'>
                                          <div className='d-flex justify-content-between'> 
                                              <img src='/chip.png'
                                                  width={60}
                                                  height={48}
                                                  alt='Chip img'/>
                                              <img src={payLogo}
                                                width={84}
                                                height={45}
                                                alt='Visa img'
                                                ref={payLogoRef}
                                                className={css`
                                                    transition: all .2s ease-in-out;
                                                `}/>
                                          </div>
                                          <SecondLine>
                                              <label className={css`
                                                    cursor: pointer;
                                                    display: flex;
                                              `}
                                              ref={inputSpansRef}
                                              htmlFor='input-number'>
                                                  {(() => {
                                                      let result = [];

                                                      for(let i = 1; i <= 16; i++) {
                                                          if(i%4 === 0 && i !== 16) {
                                                            result.push(
                                                                  <>
                                                                    <Span>{getCardNum(i - 1)}</Span>
                                                                    <Space/>
                                                                  </>
                                                            );
                                                          } else {
                                                              result.push(<Span>{getCardNum(i - 1)}</Span>);
                                                          }
                                                      }
                                                      return result.map(i => i);
                                                  })()}
                                              </label>
                                          </SecondLine>
                                          <ThirdLine className='w-100 d-flex justify-content-between'>
                                                <LabelThird>Card Holder</LabelThird>
                                                <LabelThird>Expires</LabelThird>
                                          </ThirdLine>
                                          <div className='d-flex justify-content-between'>
                                                <BottomText htmlFor='input-holder'>{cardHolder.length > 0 ? cardHolder : 'FULL NAME'}</BottomText>
                                                <label className='row'>
                                                    <BottomText htmlFor='select-month' className='col p-0'>{cardMonth.length > 0 ? cardMonth : 'MM'}</BottomText>
                                                    <BottomText className='col p-0'>/</BottomText>
                                                    <BottomText htmlFor='select-year' className='col ps-0'>{cardYear.length > 0 ? cardYear : 'YY'}</BottomText>
                                                </label>
                                          </div>
                                      </ContentContainer>
                                      <ImgContainer className='position-absolute'>
                                          <img src='/bg.jpeg'
                                            width={470}
                                            height={270}
                                            className={css`
                                                border-radius: 20px;
                                            `}
                                            alt='Card img'/>
                                      </ImgContainer>
                                  </div>
                              </Card>
                              {/*card back*/}
                              <Card ref={backRef} style={{
                                  zIndex: 1
                              }} className='position-absolute'>
                                  <div className='position-relative'>
                                      <ContentContainer style={{
                                          padding: 0
                                      }} className='position-absolute'>
                                            <SideLine/>
                                            <CvvTitle className='text-end mt-3 mb-1'>CVV</CvvTitle>
                                            <CvvLine className='rounded mx-3 text-end pt-2 pe-3'>{cardCvv.split('').map(() => '*').toString().replaceAll(',', '')}</CvvLine>
                                            <div className='ms-3'>
                                                <img className={css`
                                                    transform: rotateY(180deg);
                                                    opacity: .8;
                                                `}
                                                    src={payLogo}
                                                    width={84}
                                                    height={45}
                                                    alt='Visa logo'/>
                                            </div>
                                      </ContentContainer>
                                      <ImgContainer className='position-absolute'>
                                          <img src='/bg.jpeg'
                                            width={470}
                                            height={270}
                                            className={css`
                                                border-radius: 20px;
                                            `}
                                            alt='Card img'/>
                                      </ImgContainer>
                                  </div>
                              </Card>
                          </CardRow>
                          <CardBackGround className='bg-white position-absolute bottom-0 px-4'>
                                <label className='form-label' htmlFor='input-number'>Card Number</label>
                                <input className='form-control mb-3'
                                    id='input-number'
                                    style={{
                                        height: 48
                                    }}
                                    type='text'
                                    inputMode='numeric'
                                    pattern='[0123456789 ]{19}'
                                    maxLength={19}
                                    ref={inputNumberRef}
                                    defaultValue={cardNumber}
                                    onChange={e => {
                                        setEditedField(0);
                                        if(e.target.value.length <= 19) {
                                            setCardNumber(e.target.value.replaceAll(' ', ''));
                                        } else {
                                            e.target.value = e.target.value.substr(0, 19);
                                        }
                                    }}/>

                                <label className='form-label' htmlFor='input-holder'>Card Holders</label>
                                <input className='form-control mb-3'
                                    id='input-holder'
                                    style={{
                                        height: 48
                                    }}
                                    type='text'
                                    ref={inputHolderRef}
                                    defaultValue={cardHolder}
                                    onChange={e => {
                                        setEditedField(1);
                                        setCardHolder(e.target.value);
                                    }}/>
                                <div className='d-flex justify-content-between'>
                                    <label className='form-label' htmlFor='select-month'>Expiration Date</label>
                                    <label className='form-label' htmlFor='input-cvv'>CVV</label>
                                </div>
                                <div className='row px-2'>
                                    <select defaultValue=''
                                        id='select-month'
                                        className='col form-select me-3'
                                        style={{
                                            height: 48
                                        }}
                                        defaultValue={cardMonth}
                                        onChange={e => {
                                            setEditedField(3);
                                            setCardMonth(e.target.value);
                                        }}>
                                        <option value="" disabled="disabled">Month</option>
                                        <option value='01'>1</option>
                                        <option value='02'>2</option>
                                        <option value='03'>3</option>
                                        <option value='04'>4</option>
                                        <option value='05'>5</option>
                                        <option value='06'>6</option>
                                        <option value='07'>7</option>
                                        <option value='08'>8</option>
                                        <option value='09'>9</option>
                                        <option value='10'>10</option>
                                        <option value='11'>11</option>
                                        <option value='12'>12</option>
                                    </select>
                                    <select defaultValue=''
                                        id='select-year'
                                        className='col form-select me-3'
                                        style={{
                                            height: 48
                                        }}
                                        defaultValue={cardYear}
                                        onChange={e => {
                                            setEditedField(3);
                                            setCardYear(e.target.value);
                                        }}>
                                        <option value="" disabled="disabled">Year</option>
                                        {(() => {
                                            let render = [];
                                            const now = new Date(Date.now()).getFullYear();
                                            for(let i = 0; i < 12; i++) {
                                                
                                                render.push(now + i);
                                            }
                                            return render.map((el, i) => <option key={i} value={el.toString().substr(2)}>{el}</option>);
                                        })()}
                                    </select>
                                    <input className='col form-control'
                                    onClick={rotateToBack}
                                    onBlur={rotateToFront}
                                    style={{
                                        height: 48
                                    }}
                                    id='input-cvv'
                                    type='number'
                                    inputMode='numeric'
                                    pattern='[0-9\s]{4}'
                                    autoComplete="cc-number"
                                    maxLength="4"
                                    ref={inputCvvRef}
                                    defaultValue={cardCvv}
                                    onChange={e => {
                                        setEditedField(2);
                                        
                                        if(e.target.value.length <= 4) {
                                            setCardCvv(e.target.value);
                                        } else {
                                            e.target.value = e.target.value.substr(0, 4);
                                        }
                                    }}/>
                                </div>
                                <button className='btn btn-primary w-100 fs-5 mt-5'
                                    style={{
                                        height: 48
                                    }}>Submit</button>
                          </CardBackGround>
                      </CardForm>
                  </Background>
              </>
            );
}