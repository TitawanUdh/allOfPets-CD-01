import React, { useState } from 'react'
import { Image } from 'react-bootstrap'

function BackPage({ img }) {
  const dataBack = [
    {
      text: {
        text_th: "ข้อมูลส่วนตัว",
        text_en: 'INFORMATION'
      },

    },
    {
      name: {
        name_th: "ชาวเดอร์",
        name_en: 'chowder'
      },
    },
    {
      owner: {
        owner_th: "ณวรา (ออม)",
        owner_en: 'Navarha (AOM)',
        owner_title_th: 'เจ้าของ',
        owner_title_en: 'Handler'
      },
    },
    {
      phone: {
        phone_th: "091-717-6969",
        phone_en: '091-717-6969',
        phone_title_th: 'เบอร์โทร',
        phone_title_en: 'Phone'
      },
    },
    {
      address: {
        address_th: "วังทองหลาง / กรุงเทพ",
        address_en: 'Wangthonglang / Bangkok',
        address_title_th: 'ที่อยู่',
        address_title_en: 'Address'
      },
    },
    {
      color: {
        color_th: "สีน้ำตาล และสีขาว",
        color_en: 'Light Brown & White',
         color_title_th: 'สี',
        color_title_en: 'color'
      },
    },
    {
      weight: {
        weight_th: "20 กก.",
        weight_en: '20 kg',
         weight_title_th: 'น้ำหนัก',
        weight_title_en: 'weight'
      },
    },
    {
      hightlight: {
        hightlight_th: "ขนคิ้ว",
        hightlight_en: 'Eyebrow',
         hightlight_title_th: 'จุดเด่น',
        hightlight_title_en: 'hightlight'
      },
    },
    {
      allergy_food: {
        allergy_food_th: "นมวัว",
        allergy_food_en: 'Cow Milk',
         allergy_food_title_th: 'อาหารที่แพ้',
        allergy_food_title_en: 'allergy food'
      },
    },
    {
      fav_food: {
        fav_food_th: "อกไก่ และถั่วฝักขาว",
        fav_food_en: 'Chicken Breas,t, Long Bean',
         fav_food_title_th: 'อาหารที่ชอบ',
        fav_food_title_en: 'favorite food'
      },
    },
    {
      sacred: {
        sacred_th: "ฟ้าร้อง",
        sacred_en: 'Thunder',
         sacred_title_th: 'สิ่งที่กลัว',
        sacred_title_en: 'sacred of'
      },
    },
    {
      congenital: {
        congenital_th: "-",
        congenital_en: '-',
         congenital_title_th: 'โรคประจำตัว',
        congenital_title_en: 'congenital disease'
      },
    },
    {
      habit: {
        habit_th: `ไม่กัด เป็นมิตร แต่จะเห่าต่อเมื่อนับถอยหลัง "5 4 3 2 1" และ "ไปดูสิใครมา"`,
        habit_en: 'Does not bite, i,s playful, will bark and run if counting down “Har Sri Sam” and the words “Pai Do Si Kai Ma”',
         habit_title_th: 'อุปนิสัย',
        habit_title_en: 'habit'
      },
    },

  ]

  const [lan, setLan] = useState(true);

  const switchLanguage = () => {
    setLan(prev => !prev);
  };

  return (
    <div id="flip-card">
      <div class="front upper-font ">
        <div class="header-2 pb-2 pt-0 mt-0">{lan ? dataBack[0]?.text?.text_en : dataBack[0]?.text?.text_th}

          <span className="switch-btn-active"
            onClick={(e) => { e.stopPropagation(); switchLanguage(); }}>
            {lan ? "EN" : "TH"}
          </span>

        </div>
        <div className='row'>
          <div className='col-12 d-flex'>
            <div className='col-5'>
              <Image src={img} className="photo-back" />

            </div>
            <div className='col-7 text-descrip'>
              <h3 className='text-orange '>{lan ? dataBack[1]?.name?.name_en : dataBack[1]?.name?.name_th}</h3>
              <p><strong>{lan ? dataBack[2]?.owner?.owner_title_en : dataBack[2]?.owner?.owner_title_th}:</strong> <span class="highlight text-infos">
                {lan ? dataBack[2]?.owner?.owner_en : dataBack[2]?.owner?.owner_th}
              </span></p>
              <p><strong>{lan ? dataBack[3]?.phone?.phone_title_en : dataBack[3]?.phone?.phone_title_th}:</strong> <span class="highlight text-infos">
                {lan ? dataBack[3]?.phone?.phone_en : dataBack[3]?.phone?.phone_th}
              </span></p>

            </div>
          </div>
          <p className='mt-3 text-descrip'>
            <strong>{lan ? dataBack[4]?.address?.address_title_en : dataBack[4]?.address?.address_title_th}: </strong>
            <span class="highlight text-infos">
              {lan ? dataBack[4]?.address?.address_en : dataBack[4]?.address?.address_th}
            </span>
          </p>
        </div>

        <div className='info-text-2 text-descrip'>

          <p className='text-start'><strong>
          {lan ? dataBack[5]?.color?.color_en : dataBack[5]?.color?.color_th}: </strong>
          <span className='text-infos'>
            {lan ? dataBack[5]?.color?.color_title_en : dataBack[5]?.color?.color_title_th}
            </span>
          </p>
          <p className='text-start'><strong>
          {lan ? dataBack[6]?.weight?.weight_title_en : dataBack[6]?.weight?.weight_title_th}: </strong>
          <span className='text-infos'>
            {lan ? dataBack[6]?.weight?.weight_en : dataBack[6]?.weight?.weight_th}
            </span>
          </p>
          <p className='text-start'><strong>
          {lan ? dataBack[7]?.hightlight?.hightlight_title_en : dataBack[7]?.hightlight?.hightlight_title_th}: </strong>
          <span className='text-infos'>
            {lan ? dataBack[7]?.hightlight?.hightlight_en : dataBack[7]?.hightlight?.hightlight_th}
            </span>
          </p>
          <p className='text-start'><strong>
          {lan ? dataBack[8]?.allergy_food?.allergy_food_title_en : dataBack[8]?.allergy_food?.allergy_food_title_th}: </strong>
          <span className='text-infos'>
            {lan ? dataBack[8]?.allergy_food?.allergy_food_en : dataBack[8]?.allergy_food?.allergy_food_th}
            </span>
          </p>
          <p className='text-start'><strong>
          {lan ? dataBack[9]?.fav_food?.fav_food_title_en : dataBack[9]?.fav_food?.fav_food_title_th}: </strong>
          <span className='text-infos'>
            {lan ? dataBack[9]?.fav_food?.fav_food_en : dataBack[9]?.fav_food?.fav_food_th}
            </span>
          </p>
          <p className='text-start'><strong>
          {lan ? dataBack[10]?.sacred?.sacred_title_en : dataBack[10]?.sacred?.sacred_title_th} of: </strong>
          <span className='text-infos'>
            {lan ? dataBack[10]?.sacred?.sacred_en : dataBack[10]?.sacred?.sacred_th}
            </span>
          </p>
          <p className='text-start'><strong>
          {lan ? dataBack[11]?.congenital?.congenital_title_en : dataBack[11]?.congenital?.congenital_title_th}: </strong>
          <span className='text-infos'>
            {lan ? dataBack[11]?.congenital?.congenital_en : dataBack[11]?.congenital?.congenital_th}
            </span></p>
          <p className='text-start'><strong>
          {lan ? dataBack[12]?.habit?.habit_title_en : dataBack[12]?.habit?.habit_title_th}:</strong><br />
            <span class="highlight text-infos-des">
              {lan ? dataBack[12]?.habit?.habit_en : dataBack[12]?.habit?.habit_th}
            </span>
          </p>
        </div>

      </div>



    </div>
  )
}
export default BackPage
