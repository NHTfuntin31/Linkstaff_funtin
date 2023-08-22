import { AchiBox, TopAchi, Swiper, SwiperMini, Image } from './../../styles/homeStyles/topAchiBox'

export const Achi = () => {
  const LinkImageArray: string[] = 
  ["https://www.workport.co.jp/cmp_logos/700004247.png",
   "https://www.workport.co.jp/cmp_logos/700010299.png",
   "https://www.workport.co.jp/cmp_logos/2023020208555200dca6f79image1.jpg",
   "https://www.workport.co.jp/cmp_logos/2022072615331401653e32aimage1.png",
   "https://www.workport.co.jp/cmp_logos/2022062318564703223891dimage1.jpg",
   "https://www.workport.co.jp/cmp_logos/2022071111520402f91b7aeimage1.jpg",
   "https://www.workport.co.jp/cmp_logos/20201228171130007f9d602image1.png",
   "https://www.workport.co.jp/cmp_logos/700003909.png",
   "https://www.workport.co.jp/cmp_logos/750121817.png",
   "https://www.workport.co.jp/cmp_logos/202302011940240352c8861image1.png",
   "https://www.workport.co.jp/cmp_logos/202305301211390270d51b1image1.png",
   "https://www.workport.co.jp/cmp_logos/2023020714454100177299aimage1.jpg",
   "https://www.workport.co.jp/cmp_logos/20230216094226039072123image1.png",
   "https://www.workport.co.jp/cmp_logos/20221107182412019098b62image1.png",
  ]

  const LinkImage = LinkImageArray.map((item: string, index: number) =>(
    <li key={index}>
      <Image src={item} alt=""/>
    </li>
    
  ))
  return(
    <>
      <AchiBox>
				<TopAchi>
          <div><h2>紹介実績</h2></div>
					<Swiper>
            <SwiperMini>
              <ul>
                {LinkImage}
                {LinkImage}
                {LinkImage}
              </ul>
            </SwiperMini>
					</Swiper>
				</TopAchi>
			</AchiBox>
    </>
  )
}