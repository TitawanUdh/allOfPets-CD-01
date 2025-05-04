import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import imgChowder from '../images/chowder-01.jpg'
import BackPage from './back-page';
function MainPage() {

  const [lan, setLan] = useState(true)
  const switchLanguage = (value) => {
    setLan(value);
  };
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const dataPageOne = [
    {
      specy:
      {
        specy_en: 'corgi dog',
        specy_th: 'คอกี้'
      }
    },
    {
      name:
      {
        name_en: 'chowder',
        name_th: 'ชาวเดอร์'
      }
    },
    {
      owner:
      {
        owner_en: 'Navarrha (Aom)',
        owner_th: 'ณวรา (ออม)'
      }
    },
    {
      phone:
      {
        phone_en: '091-717-6969',
        phone_th: '091-717-6969'
      }
    },
    {
      address:
      {
        address_en: 'Wangthonglang / BKK',
        address_th: 'วังทองหลาง / กรุงเทพ'
      }
    },
  ]

  return (
    <div className="page-container ">
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="flip-card-inner">

          {/* FRONT */}
          <div className="flip-card-front">
            <div className="id-card">
              <div className="header">
                {lan ? dataPageOne[0]?.specy?.specy_en : dataPageOne[0]?.specy?.specy_th}
              </div>
              <div className="d-flex justify-content-center">
                <Image src={imgChowder} className="photo" />
              </div>
              <div className="language-switch">
                <Button
                  className={`small ${!lan ? 'btn btn-warning' : 'btn btn-light'}`}
                  onClick={(e) => { e.stopPropagation(); switchLanguage(false); }}
                >
                  TH
                </Button>
                <Button
                  className={`small ${lan ? 'btn btn-warning' : 'btn btn-light'}`}
                  onClick={(e) => { e.stopPropagation(); switchLanguage(true); }}
                >
                  EN
                </Button>
              </div>
              <div className="info">
                <h2>{lan ? dataPageOne[1]?.name?.name_en : dataPageOne[1]?.name?.name_th}</h2>
                <p><strong>Handler / Owner:</strong><br />
                  <span className='text-infos'>{lan ? dataPageOne[2]?.owner?.owner_en : dataPageOne[2]?.owner?.owner_th}</span>
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  <a href={`tel:${dataPageOne[3]?.phone?.phone_en}`}>
                    {lan ? dataPageOne[3]?.phone?.phone_en : dataPageOne[3]?.phone?.phone_th}
                  </a>
                </p>
                <p><strong>City / State:</strong><br />
                  <span className='text-infos'>{lan ? dataPageOne[4]?.address?.address_en : dataPageOne[4]?.address?.address_th}</span>
                </p>
              </div>
              <div className="footer">
                If I go missing, please contact my owner.<br />
                Or if you need to stay with me, my information is included here.
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className="flip-card-back">
          <div className="id-card">
            <BackPage lan={lan} img={imgChowder}
            switchLanguage={switchLanguage} />
            </div>
            </div>
        </div>
      </div>
    </div>

  )
}

export default MainPage
