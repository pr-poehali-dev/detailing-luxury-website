import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);

  const services = [
    {
      icon: "Car",
      title: "Экстерьер Premium",
      description: "Полировка кузова, керамическое покрытие, защита лакокрасочного покрытия",
      price: "от 15 000₽"
    },
    {
      icon: "Sparkles",
      title: "Интерьер Luxury",
      description: "Химчистка салона, обработка кожи, устранение запахов",
      price: "от 8 000₽"
    },
    {
      icon: "Shield",
      title: "Защитные покрытия",
      description: "Керамика, воск, антидождь, защита от камней",
      price: "от 25 000₽"
    },
    {
      icon: "Wrench",
      title: "Подготовка к продаже",
      description: "Комплексная обработка для максимальной стоимости",
      price: "от 20 000₽"
    }
  ];

  const portfolio = [
    {
      title: "Porsche 911 Turbo",
      category: "Керамическое покрытие",
      image: "/img/9e0d2adb-dd03-4506-bf4e-f1c6f09230ce.jpg"
    },
    {
      title: "BMW M5 Competition",
      category: "Полная детализация",
      image: "/img/a9423378-8f62-40f6-9736-4ca246c41563.jpg"
    },
    {
      title: "Mercedes S-Class",
      category: "Премиум обслуживание",
      image: "/img/ba41bef2-e774-4b7e-b53e-359d8efbdaa0.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-luxury-dark/90 backdrop-blur-md border-b border-luxury-gray/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
              PREMIUM DETAILING
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-luxury-gold transition-colors">Главная</a>
              <a href="#services" className="hover:text-luxury-gold transition-colors">Услуги</a>
              <a href="#about" className="hover:text-luxury-gold transition-colors">О студии</a>
              <a href="#portfolio" className="hover:text-luxury-gold transition-colors">Портфолио</a>
              <a href="#pricing" className="hover:text-luxury-gold transition-colors">Цены</a>
              <a href="#contact" className="hover:text-luxury-gold transition-colors">Контакты</a>
            </div>
            <Button className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/img/9e0d2adb-dd03-4506-bf4e-f1c6f09230ce.jpg')` }}
        >
          <div className="absolute inset-0 bg-luxury-dark/70"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
            ПРЕМИАЛЬНЫЙ
            <br />
            ДЕТЕЙЛИНГ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-luxury-gray-light">
            Превращаем ваш автомобиль в произведение искусства
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold px-8 py-4 text-lg">
              Узнать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark px-8 py-4 text-lg">
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
              Наши услуги
            </h2>
            <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
              Профессиональный уход за автомобилями премиум-класса с использованием лучших материалов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-luxury-dark border-luxury-gray/30 p-6 hover:border-luxury-gold/50 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-luxury-gray-light mb-4 text-sm">{service.description}</p>
                  <p className="text-luxury-gold font-bold text-lg">{service.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-luxury-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
              До и После
            </h2>
            <p className="text-xl text-luxury-gray-light">
              Результат нашей работы говорит сам за себя
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/img/ba41bef2-e774-4b7e-b53e-359d8efbdaa0.jpg')` }}
              />
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                style={{ 
                  backgroundImage: `url('/img/a9423378-8f62-40f6-9736-4ca246c41563.jpg')`,
                  clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)`
                }}
              />
              
              {/* Slider Control */}
              <div className="absolute inset-0 flex items-center">
                <div 
                  className="absolute bg-luxury-gold/80 w-1 h-full cursor-col-resize"
                  style={{ left: `${beforeAfterSlider}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-luxury-gold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                    <Icon name="ArrowLeftRight" size={16} className="text-luxury-dark" />
                  </div>
                </div>
                
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={beforeAfterSlider}
                  onChange={(e) => setBeforeAfterSlider(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
                />
              </div>
              
              {/* Labels */}
              <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-sm">
                ДО
              </div>
              <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded text-white text-sm">
                ПОСЛЕ
              </div>
              
              <div className="h-96"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
              Портфолио
            </h2>
            <p className="text-xl text-luxury-gray-light">
              Примеры наших лучших работ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="bg-luxury-dark border-luxury-gray/30 overflow-hidden group hover:border-luxury-gold/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-luxury-gold">{item.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-luxury-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
                О нашей студии
              </h2>
              <p className="text-xl text-luxury-gray-light mb-8">
                Мы — команда профессионалов с более чем 10-летним опытом в сфере автомобильного детейлинга. 
                Наша студия оснащена самым современным оборудованием и использует только премиальные материалы.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-gold mb-2">500+</div>
                  <div className="text-luxury-gray-light">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-gold mb-2">10</div>
                  <div className="text-luxury-gray-light">Лет опыта</div>
                </div>
              </div>
              <Button className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold">
                Узнать больше
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/a9423378-8f62-40f6-9736-4ca246c41563.jpg" 
                alt="Наша студия"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
              Цены
            </h2>
            <p className="text-xl text-luxury-gray-light">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Базовый",
                price: "5 000₽",
                features: ["Мойка кузова", "Пылесос салона", "Чернение резины", "Мойка дисков"]
              },
              {
                name: "Премиум",
                price: "15 000₽",
                features: ["Всё из базового", "Полировка кузова", "Химчистка салона", "Защитный воск", "Антидождь"],
                featured: true
              },
              {
                name: "VIP",
                price: "30 000₽",
                features: ["Всё из премиума", "Керамическое покрытие", "Обработка кожи", "Полировка хрома", "Гарантия 1 год"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`p-8 ${plan.featured ? 'bg-luxury-gold text-luxury-dark border-luxury-gold' : 'bg-luxury-dark border-luxury-gray/30'} hover:border-luxury-gold/50 transition-all duration-300`}>
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${plan.featured ? 'text-luxury-dark' : 'text-white'}`}>{plan.name}</h3>
                  <div className={`text-4xl font-bold ${plan.featured ? 'text-luxury-dark' : 'text-luxury-gold'}`}>{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${plan.featured ? 'text-luxury-dark' : 'text-luxury-gray-light'}`}>
                      <Icon name="Check" size={16} className={`mr-3 ${plan.featured ? 'text-luxury-dark' : 'text-luxury-gold'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.featured ? 'bg-luxury-dark text-luxury-gold hover:bg-luxury-gray' : 'bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark'} font-semibold`}
                >
                  Выбрать пакет
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-luxury-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
              Контакты
            </h2>
            <p className="text-xl text-luxury-gray-light">
              Свяжитесь с нами для записи на обслуживание
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-luxury-gold/10 rounded-full">
                  <Icon name="Phone" size={24} className="text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Телефон</h3>
                  <p className="text-luxury-gray-light">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-luxury-gold/10 rounded-full">
                  <Icon name="Mail" size={24} className="text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-luxury-gray-light">info@premiumdetailing.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-luxury-gold/10 rounded-full">
                  <Icon name="MapPin" size={24} className="text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Адрес</h3>
                  <p className="text-luxury-gray-light">Москва, ул. Автомобильная, 15</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-luxury-gold/10 rounded-full">
                  <Icon name="Clock" size={24} className="text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Часы работы</h3>
                  <p className="text-luxury-gray-light">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-luxury-gray border-luxury-gray/30 p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Записаться на обслуживание</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 bg-luxury-dark border border-luxury-gray/30 rounded text-white placeholder-luxury-gray-light focus:border-luxury-gold focus:outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-3 bg-luxury-dark border border-luxury-gray/30 rounded text-white placeholder-luxury-gray-light focus:border-luxury-gold focus:outline-none"
                />
                <select className="w-full p-3 bg-luxury-dark border border-luxury-gray/30 rounded text-white focus:border-luxury-gold focus:outline-none">
                  <option>Выберите услугу</option>
                  <option>Базовый пакет</option>
                  <option>Премиум пакет</option>
                  <option>VIP пакет</option>
                </select>
                <textarea 
                  placeholder="Комментарий" 
                  rows={4}
                  className="w-full p-3 bg-luxury-dark border border-luxury-gray/30 rounded text-white placeholder-luxury-gray-light focus:border-luxury-gold focus:outline-none"
                />
                <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold">
                  Отправить заявку
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-gray border-t border-luxury-gray/30 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">
              PREMIUM DETAILING
            </div>
            <p className="text-luxury-gray-light mb-6">
              Превосходство в каждой детали
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-luxury-gray-light hover:text-luxury-gold transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-luxury-gray-light hover:text-luxury-gold transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-luxury-gray-light hover:text-luxury-gold transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-luxury-gray/30 text-luxury-gray-light text-sm">
              © 2024 Premium Detailing. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;