'use client'
import React from 'react'
import AboutUs from './about-us'
import OurProjects from './our-projects'
import Services from './home-services'
import Marquee from './marquee'
import Certificates from './certificates'
import Blogs from './blogs'
import CompanySwiper from '../swiper/company-swiper'
import PartnersSlider from '../swiper/partners-slider'
import OurTeams from './our-team'
import HomeBanner from './home-banner'
import { useQuery } from '@tanstack/react-query'
import { CertificateProps } from '@/types/common'
import { GetApi } from '@/lib/axios'
import { useLanguage } from '@/context/LanguageProvider'
import { useTranslation } from '@/utils/i18n'


const Home = () => {
    const { language } = useLanguage();
    const {t} = useTranslation()
    const { data } = useQuery<CertificateProps>({
    queryKey: ["certificates"],
    queryFn: () => GetApi(`/certificates/?lang=${language}`),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="container">
      <HomeBanner />
      <AboutUs />
      <PartnersSlider />
      <OurProjects />
      <Services />
      <Marquee />
      <CompanySwiper />
      {data && <Certificates title={t("home.certificates.title")} data={data}/>}
      <OurTeams />
      <Blogs />
    </div>
  );
};

export default Home;
