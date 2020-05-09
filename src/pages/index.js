import React from "react"
import MainLayout from "@/layouts/MainLayout"
import Promo from "@/components/Promo"
import Carousel from "@/components/Carousel"
import Features from "@/components/Features"
import ListDevelopment from "@/components/List/development"
import ListDesign from "@/components/List/design"
import Pricing from "@/components/Pricing"
import Table from "@/components/Table"
import Recommended from "@/components/Recommended"
import Reviews from "@/components/Reviews"
import Unlock from "@/components/Unlock"
import Form from "@/components/Form"

export default () => {
  return (
    <MainLayout>
      <Promo />
      <Carousel />
      <Features />
      <ListDevelopment />
      <ListDesign />
      <Pricing />
      <Table />
      <Recommended />
      <Reviews />
      <Unlock />
      <Form />
    </MainLayout>
  )
}
