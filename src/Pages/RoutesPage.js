import React from 'react'
import ImageOfBus from "../Components/ImageOfBus/ImageOfBus"
import Input from "../Components/MyInput/Input"
import Card from "../Components/MyCards/Card"
import Button from "../Components/MyButton/Button"

export default function RoutesPage() {
  return (
    <>
        <ImageOfBus></ImageOfBus>
        <p className="heading">Выберите маршрут</p>
        <Input></Input>
        <div className="Card-box">
            <Card>101</Card>
            <Card>102</Card>
            <Card>103</Card>
            <Card>104</Card>
            <Card>105</Card>
            <Card>107</Card>
            <Card>108</Card>
            <Card>109</Card>
            <Card>110</Card>
            <Card>112</Card>
            <Card>300</Card>
            <Card>330</Card>
        </div>
        <Button>Далее</Button>
    </>
  )
}
