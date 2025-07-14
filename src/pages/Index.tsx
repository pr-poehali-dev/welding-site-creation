import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-orange-500" size={32} />
              <h1 className="text-2xl font-bold text-slate-800">СварТех</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#about" className="text-slate-600 hover:text-orange-500 font-medium">О компании</a>
              <a href="#services" className="text-slate-600 hover:text-orange-500 font-medium">Услуги</a>
              <a href="#portfolio" className="text-slate-600 hover:text-orange-500 font-medium">Портфолио</a>
              <a href="#contact" className="text-slate-600 hover:text-orange-500 font-medium">Контакты</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Профессиональная сварка 
                <span className="text-orange-500"> сложных объектов</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Выполняем сварочные работы любой сложности: трубопроводы, цистерны, танки и промышленные конструкции. 15+ лет опыта.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Получить расчет
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate-800">
                  <Icon name="Play" size={20} className="mr-2" />
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://v3.fal.media/files/kangaroo/zqpW-AToKyfoxPqXkXlF6_output.png" 
                alt="Сварочные работы" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600">Специализируемся на сварке промышленных объектов</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Pipe" className="text-orange-500" size={32} />
                </div>
                <CardTitle className="text-xl">Сварка трубопроводов</CardTitle>
                <CardDescription>
                  Монтаж и ремонт трубопроводных систем различного назначения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
                  <li>• Газопроводы</li>
                  <li>• Водопроводы</li>
                  <li>• Нефтепроводы</li>
                  <li>• Технологические трубы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Container" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Сварка цистерн</CardTitle>
                <CardDescription>
                  Изготовление и восстановление емкостей для хранения жидкостей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
                  <li>• Топливные цистерны</li>
                  <li>• Пищевые емкости</li>
                  <li>• Химические резервуары</li>
                  <li>• Водные баки</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building" className="text-slate-600" size={32} />
                </div>
                <CardTitle className="text-xl">Сварка танков</CardTitle>
                <CardDescription>
                  Сварочные работы по промышленным резервуарам большого объема
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
                  <li>• Нефтяные резервуары</li>
                  <li>• Газовые танки</li>
                  <li>• Промышленные емкости</li>
                  <li>• Силосы</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Наши работы</h2>
            <p className="text-xl text-slate-600">Примеры выполненных проектов</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/img/ccdeb196-0d95-48a6-810a-3b0a647d8de9.jpg" 
                  alt="Сварка трубопровода" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Газопровод высокого давления</CardTitle>
                <CardDescription>Монтаж 15 км трубопровода DN 500</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/img/35f95ce9-48a2-4415-a36e-6bb55b214258.jpg" 
                  alt="Сварка резервуара" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Резервуар для воды</CardTitle>
                <CardDescription>Изготовление емкости объемом 1000 м³</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/img/f7168b06-75bb-419a-99c3-831e2711f7c3.jpg" 
                  alt="Сварка цистерны" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Промышленный резервуар</CardTitle>
                <CardDescription>Ремонт нефтяного танка РВС-5000</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">О компании СварТех</h2>
              <p className="text-lg text-slate-600 mb-6">
                Более 15 лет мы специализируемся на выполнении сложных сварочных работ для промышленных предприятий. 
                Наша команда сертифицированных специалистов использует современное оборудование и проверенные технологии.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-slate-600">Выполненных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                  <div className="text-slate-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">24</div>
                  <div className="text-slate-600">Сварщика в команде</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                  <div className="text-slate-600">Качество работ</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Преимущества работы с нами</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-orange-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Сертифицированные специалисты</h4>
                    <p className="text-slate-300">Все сварщики имеют действующие аттестаты НАКС</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-orange-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Современное оборудование</h4>
                    <p className="text-slate-300">Используем профессиональную технику ведущих брендов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-orange-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Гарантия качества</h4>
                    <p className="text-slate-300">Предоставляем гарантию на все виды работ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-orange-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Соблюдение сроков</h4>
                    <p className="text-slate-300">Выполняем проекты точно в срок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-slate-300">Получите бесплатную консультацию по вашему проекту</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Телефон</h3>
              <p className="text-slate-300">+7 (495) 123-45-67</p>
              <p className="text-slate-300">+7 (985) 987-65-43</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300">info@svartech.ru</p>
              <p className="text-slate-300">zakaz@svartech.ru</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Адрес</h3>
              <p className="text-slate-300">г. Москва, ул. Промышленная, 15</p>
              <p className="text-slate-300">БЦ "Сталь", офис 205</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Zap" className="text-orange-500" size={24} />
              <span className="text-white font-bold">СварТех</span>
            </div>
            <p className="text-slate-400">© 2024 СварТех. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;