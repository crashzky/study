import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled'

export default function Main() {
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
    `;

    const CardRow = styled.div`
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
        margin-top: 40px;
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

    return (
              <>
                  <Head>
                      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"/>
                      <title>Card master</title>
                  </Head>
                  <Background className='d-flex justify-content-center align-items-center'>
                      <CardForm className='position-relative'>
                          <CardRow className='position-absolute d-flex justify-content-center'>
                              <Card>
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
                                              <label className='w-100'>
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
                                      </ContentContainer>
                                      <ImgContainer className='position-absolute'>
                                          <Image src='/bg.jpeg'
                                            width={470}
                                            height={270}
                                            className='rounded'
                                            alt='Card img'/>
                                      </ImgContainer>
                                  </div>
                              </Card>
                          </CardRow>
                          <CardBackGround className='bg-white position-absolute bottom-0'>

                          </CardBackGround>
                      </CardForm>
                  </Background>
              </>
            );
}