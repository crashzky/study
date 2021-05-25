import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled'
import {css} from '@emotion/css';
import {useRef} from 'react';

export default function Main() {
    const rowRef = useRef();
    const frontRef = useRef();
    const backRef = useRef();

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
    `;
    
    //#endregion

    function rotateToBack() {
        rowRef.current.style = 'transform: perspective(2000px) rotateY(180deg);';
        setTimeout(() => {
            frontRef.current.style = 'z-index: 1;';
            backRef.current.style = 'z-index: 2;';
        }, 240);
    }

    function rotateToFront() {
        rowRef.current.style = 'transform: perspective(2000px) rotateY(0deg);';
        setTimeout(() => {
            frontRef.current.style = 'z-index: 2;';
            backRef.current.style = 'z-index: 1;';
        }, 240);
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
                                              <Image src='/chip.png'
                                                  width={60}
                                                  height={48}
                                                  alt='Chip img'/>
                                              <Image src='/visa.png'
                                                width={84}
                                                height={45}
                                                alt='Visa img'/>
                                          </div>
                                          <SecondLine>
                                              <label className={css`
                                                    cursor: pointer;
                                              `}
                                              htmlFor='input-number'>
                                                  <Span>#</Span>
                                                  <Span>#</Span>
                                                  <Span>#</Span>
                                                  <Span>#</Span>

                                                  <Space> </Space>

                                                  <Span>#</Span>
                                                  <Span>#</Span>
                                                  <Span>#</Span>
                                                  <Span>#</Span>

                                                  <Space> </Space>

                                                  <Span>#</Span>
                                                  <Span>#</Span>
                                                  <Span>#</Span>
                                                  <Span>#</Span>

                                                  <Space> </Space>

                                                  <Span>#</Span>
                                                  <Span>#</Span>
                                                  <Span>#</Span>
                                                  <Span>#</Span>
                                              </label>
                                          </SecondLine>
                                          <ThirdLine className='w-100 d-flex justify-content-between'>
                                                <LabelThird>Card Holder</LabelThird>
                                                <LabelThird>Expires</LabelThird>
                                          </ThirdLine>
                                          <div className='d-flex justify-content-between'>
                                                <BottomText htmlFor='input-holder'>FULL NAME</BottomText>
                                                <label className='row'>
                                                    <BottomText htmlFor='select-month' className='col p-0'>MM</BottomText>
                                                    <BottomText className='col p-0'>/</BottomText>
                                                    <BottomText htmlFor='select-year' className='col ps-0'>YY</BottomText>
                                                </label>
                                          </div>
                                      </ContentContainer>
                                      <ImgContainer className='position-absolute'>
                                          <Image src='/bg.jpeg'
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
                                            <CvvLine className='rounded mx-3'/>
                                            <div className='ms-3'>
                                                <Image className={css`
                                                    transform: rotateY(180deg);
                                                    opacity: .8;
                                                `}
                                                    src='/visa.png'
                                                    width={84}
                                                    height={45}
                                                    alt='Visa logo'/>
                                            </div>
                                      </ContentContainer>
                                      <ImgContainer className='position-absolute'>
                                          <Image src='/bg.jpeg'
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
                                    type='number'
                                    inputMode='numeric'
                                    pattern='[0-9\s]{12}'
                                    autoComplete="cc-number"
                                    maxLength="12" />

                                <label className='form-label' htmlFor='input-holder'>Card Holders</label>
                                <input className='form-control mb-3'
                                    id='input-holder'
                                    style={{
                                        height: 48
                                    }}
                                    type='text'/>
                                <div className='d-flex justify-content-between'>
                                    <label className='form-label' for='select-month'>Expiration Date</label>
                                    <label className='form-label' for='input-cvv'>CVV</label>
                                </div>
                                <div className='row px-2'>
                                    <select defaultValue=''
                                        id='select-month'
                                        className='col form-select me-3'
                                        style={{
                                            height: 48
                                        }}>
                                        <option value="" disabled="disabled">Month</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                        <option value='7'>7</option>
                                        <option value='8'>8</option>
                                        <option value='9'>9</option>
                                        <option value='10'>10</option>
                                        <option value='11'>11</option>
                                        <option value='12'>12</option>
                                    </select>
                                    <select defaultValue=''
                                        id='select-year'
                                        className='col form-select me-3'
                                        style={{
                                            height: 48
                                        }}>
                                        <option value="" disabled="disabled">Year</option>
                                        {(() => {
                                            let render = [];
                                            const now = new Date(Date.now()).getFullYear();
                                            for(let i = 0; i < 12; i++) {
                                                
                                                render.push(now + i);
                                            }
                                            return render.map((el, i) => <option key={i} value={el}>{el}</option>);
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
                                    pattern='[0-9\s]{12}'
                                    autoComplete="cc-number"
                                    maxLength="4" />
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