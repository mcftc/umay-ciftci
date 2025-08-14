'use client'

import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles, Gift, Baby, Dog, Cat, Bird, Rabbit } from 'lucide-react';

const UmayCiftciWebsite = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [haytapAmount, setHaytapAmount] = useState('');
  const [umayAmount, setUmayAmount] = useState('');
  const [wobbleElements, setWobbleElements] = useState<boolean[]>([]);
  const [clickedEmojis, setClickedEmojis] = useState<Array<{id: number, emoji: string, x: number, y: number}>>([]);

  // Countdown Timer
  useEffect(() => {
    const updateCountdown = () => {
      const birthDate = new Date('2025-09-05T00:00:00').getTime();
      const now = new Date().getTime();
      const distance = birthDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(interval);
  }, []);

  // Random wobble animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWobbleElements(prev => {
        const newWobble = Array(10).fill(false);
        const randomIndex = Math.floor(Math.random() * 10);
        newWobble[randomIndex] = true;
        return newWobble;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleEmojiClick = (emoji: string, event: React.MouseEvent) => {
    const newEmoji = {
      id: Date.now(),
      emoji: emoji,
      x: event.clientX,
      y: event.clientY
    };
    setClickedEmojis(prev => [...prev, newEmoji]);
    setTimeout(() => {
      setClickedEmojis(prev => prev.filter(e => e.id !== newEmoji.id));
    }, 2000);
  };

  const handleDonation = async (type: string) => {
    const amount = type === 'haytap' ? haytapAmount : umayAmount;
    
    if (!amount || parseFloat(amount) <= 0) {
      alert('� Gugu gaga! Bi\'şeyler yazman lazım! (Tutar girmeyi unuttun galiba hihi)');
      return;
    }

    const message = type === 'haytap' 
      ? `� Vay vay vay! ${amount} ₺ ile köpüşlere mama alıcaz! Çok sağ ol! Ben de onları seviyom! �`
      : `� YAAAYYYY! ${amount} ₺ benim için! Artık ${Math.floor(parseFloat(amount)/50)} tane çıngırak alabilirim! Teşekkür ederimmm! �`;
    
    alert(message);
    
    // Here you would integrate with payment gateway
    // Example: await fetch('/api/donate', { method: 'POST', body: JSON.stringify({ type, amount }) })
  };

  const randomBabySound = () => {
    const sounds = ['Gugu!', 'Gaga!', 'Dadada!', 'Mamamama!', 'Hihi!', 'Agugu!', 'Bububu!'];
    alert(sounds[Math.floor(Math.random() * sounds.length)]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-200 to-sky-200 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {['�', '☁️', '⭐', '�', '�', '�', '�', '�'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Clicked Emojis */}
      {clickedEmojis.map(emoji => (
        <div
          key={emoji.id}
          className="fixed text-6xl animate-ping pointer-events-none z-50"
          style={{ left: emoji.x - 30, top: emoji.y - 30 }}
        >
          {emoji.emoji}
        </div>
      ))}

      <div className="container mx-auto px-4 py-6 relative z-20">
        {/* Header - Baby Style */}
        <header className="text-center mb-8 relative">
          <div className="bg-white/80 backdrop-blur rounded-full p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-comic">
              <span className="text-pink-500">M</span>
              <span className="text-yellow-500">e</span>
              <span className="text-blue-500">r</span>
              <span className="text-green-500">h</span>
              <span className="text-purple-500">a</span>
              <span className="text-red-500">b</span>
              <span className="text-orange-500">a</span>
              <span className="text-pink-500">!</span>
              <span className="ml-4">�</span>
            </h1>
            <div className="text-2xl text-gray-700 mb-4 font-comic">
              Ben <span className="font-bold text-pink-600">UMAY ÇİFTÇİ</span>! 
            </div>
            <p className="text-lg text-gray-600 font-comic">
              Henüz doğmadım ama web sitemi yaptım bile! �
            </p>
            <p className="text-sm text-gray-500 mt-2 font-comic">
              (Annem babam yardım etti birazcık ama sshhh �)
            </p>
          </div>
          
          {/* Floating baby accessories */}
          <div className="absolute -top-4 -left-4 text-4xl animate-spin-slow cursor-pointer" onClick={(e) => handleEmojiClick('�', e)}>�</div>
          <div className="absolute -top-4 -right-4 text-4xl animate-bounce cursor-pointer" onClick={(e) => handleEmojiClick('�', e)}>�</div>
          <div className="absolute -bottom-4 left-1/2 text-4xl animate-pulse cursor-pointer" onClick={(e) => handleEmojiClick('�', e)}>�</div>
        </header>

        {/* Countdown with Baby Talk */}
        <div className="bg-gradient-to-r from-pink-300 to-purple-300 rounded-3xl p-6 mb-8 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 font-comic">
            � DOĞMAMA NE KADAR KALDI? �
          </h2>
          <div className="text-center mb-4 text-white">
            <p className="text-lg font-comic">
              Sabırsızlanıyorummm! Dünyayı görmek için can atıyorum! �
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { value: countdown.days, label: 'Uyku', emoji: '�' },
              { value: countdown.hours, label: 'Süt', emoji: '�' },
              { value: countdown.minutes, label: 'Gaz', emoji: '�' },
              { value: countdown.seconds, label: 'Hıçkırık', emoji: '�' }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-4 shadow-lg transform hover:scale-110 transition-all cursor-pointer ${wobbleElements[index] ? 'animate-wiggle' : ''}`}
                onClick={() => randomBabySound()}
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <span className="text-3xl font-bold text-purple-600 block">{item.value}</span>
                <span className="text-xs text-gray-600 uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Question Section */}
        <div className="bg-white/90 rounded-3xl p-6 mb-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-comic">
            <span className="text-pink-500">BANA HEDİYE ALMAK İSTER MİSİN?</span> �
          </h2>
          <p className="text-center text-lg mb-4 font-comic">
            Yaa şey... �� Ben daha doğmadım ama şimdiden hazırlık yapmak lazım di mi?
          </p>
          <p className="text-center text-md text-gray-600 font-comic">
            Hem bana hem de sevimli hayvanlara yardım edebilirsin! Ben hayvanları çoook seviyorum! �
          </p>
        </div>

        {/* Donation Cards - Baby Style */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Haytap Card */}
          <div className="bg-yellow-100 rounded-3xl p-6 shadow-xl transform -rotate-2 hover:rotate-0 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 text-8xl opacity-10">�</div>
            
            <div className="flex justify-center gap-2 mb-4 text-4xl">
              <Dog className="w-10 h-10 text-brown-600 animate-bounce" />
              <Cat className="w-10 h-10 text-gray-600 animate-bounce" style={{animationDelay: '0.2s'}} />
              <Bird className="w-10 h-10 text-blue-600 animate-bounce" style={{animationDelay: '0.4s'}} />
              <Rabbit className="w-10 h-10 text-pink-600 animate-bounce" style={{animationDelay: '0.6s'}} />
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4 font-comic">
              SOKAK HAYVANLARİ İÇİN! �
            </h3>
            
            <div className="bg-white/80 rounded-xl p-4 mb-4">
              <p className="text-center font-comic">
                Biliyomusun? Sokakta yaşayan köpüşler ve kedişler var! �
                Onlara mama ve yuva lazım! Sen de yardım eder misin?
                Ben doğunca onlarla oynayacağım! �
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { amount: 50, text: '1 Kap Mama' },
                { amount: 100, text: '2 Kap Mama' },
                { amount: 250, text: '5 Kap Mama' },
                { amount: 500, text: 'Koca Çuval!' }
              ].map(item => (
                <button
                  key={item.amount}
                  onClick={() => setHaytapAmount(item.amount.toString())}
                  className="bg-orange-400 hover:bg-orange-500 text-white rounded-xl py-2 px-3 font-bold transform hover:scale-105 transition-all shadow-lg font-comic"
                >
                  {item.amount}₺<br/>
                  <span className="text-xs">{item.text}</span>
                </button>
              ))}
            </div>

            <input
              type="number"
              value={haytapAmount}
              onChange={(e) => setHaytapAmount(e.target.value)}
              placeholder="Başka bi' tutar?"
              className="w-full p-3 border-4 border-orange-300 rounded-xl mb-4 text-center font-bold font-comic"
            />

            <button
              onClick={() => handleDonation('haytap')}
              className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-2xl py-4 font-bold text-lg transform hover:scale-105 transition-all shadow-xl animate-pulse font-comic"
            >
              HAYDİ MAMA ALALIM! �
            </button>
          </div>

          {/* Umay's Card */}
          <div className="bg-pink-100 rounded-3xl p-6 shadow-xl transform rotate-2 hover:rotate-0 transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 text-8xl opacity-10">�</div>
            
            <div className="text-center mb-4">
              <div className="text-6xl animate-bounce inline-block">��</div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4 font-comic">
              UMAY'IN KUMBARASI! ��
            </h3>
            
            <div className="bg-white/80 rounded-xl p-4 mb-4">
              <p className="text-center font-comic">
                Ehehe... � Benim de biraz biberona, çıngırağa, 
                yumuşacık battaniyeye falan ihtiyacım olacak!
                Bir de belki oyuncak? � Belki iki oyuncak? 
                Belki... çok oyuncak? �
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { amount: 100, text: '2 Biberon' },
                { amount: 250, text: '1 Uyku Tulumu' },
                { amount: 500, text: 'Oyuncak Dolu Sepet' },
                { amount: 1000, text: 'SÜPER BEBEK SETİ!' }
              ].map(item => (
                <button
                  key={item.amount}
                  onClick={() => setUmayAmount(item.amount.toString())}
                  className="bg-pink-400 hover:bg-pink-500 text-white rounded-xl py-2 px-3 font-bold transform hover:scale-105 transition-all shadow-lg font-comic"
                >
                  {item.amount}₺<br/>
                  <span className="text-xs">{item.text}</span>
                </button>
              ))}
            </div>

            <input
              type="number"
              value={umayAmount}
              onChange={(e) => setUmayAmount(e.target.value)}
              placeholder="Başka bi' tutar?"
              className="w-full p-3 border-4 border-pink-300 rounded-xl mb-4 text-center font-bold font-comic"
            />

            <button
              onClick={() => handleDonation('baby')}
              className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-2xl py-4 font-bold text-lg transform hover:scale-105 transition-all shadow-xl animate-pulse font-comic"
            >
              UMAY'A HEDİYE! �
            </button>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="bg-gradient-to-r from-green-200 to-blue-200 rounded-3xl p-6 mb-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-4 font-comic">
            � UMAY HAKKINDA EĞLENCE BİLGİLER �
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/80 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">�</div>
              <p className="font-comic">
                Adım UMAY! Türk mitolojisinde çocukları koruyan tanrıçanın adıymış! Cool di mi?
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">�</div>
              <p className="font-comic">
                5 Eylül 2025'te doğacağım! Başak burcuyum! ♍
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">�</div>
              <p className="font-comic">
                En sevdiğim renkler... Aaa dur henüz görmedim ki renkleri! �
              </p>
            </div>
          </div>
        </div>

        {/* Baby's Message */}
        <div className="bg-white/90 rounded-3xl p-6 mb-8 shadow-xl text-center">
          <h3 className="text-2xl font-bold mb-4 font-comic">
            � UMAY'DAN MESAJ VAR! �
          </h3>
          <p className="text-lg mb-4 font-comic">
            Sevgili büyükler! �
          </p>
          <p className="mb-3 font-comic">
            Ben henüz annemin karnındayım ama çok heyecanlıyım! 
            Dünyaya gelince sizinle tanışmak için sabırsızlanıyorum!
          </p>
          <p className="mb-3 font-comic">
            Eğer bana veya sevimli hayvanlara yardım ederseniz,
            doğunca size çooook büyük gülücükler göndereceğim! �
          </p>
          <p className="font-bold text-pink-600 font-comic">
            Gugu gaga! (Bu "teşekkürler" demek bebek dilinde!)
          </p>
          <div className="mt-4 text-4xl">
            ���
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-700 mt-8">
          <p className="text-xl mb-2 font-comic">
            � umayciftci.com �
          </p>
          <p className="text-sm font-comic">
            © 2025 Baby Umay Productions �
          </p>
          <p className="text-xs mt-2 text-gray-500 font-comic">
            (Annem babam biraz yardım etti ama ben yönettim projeyi!)
          </p>
        </footer>
      </div>
    </div>
  );
};

export default UmayCiftciWebsite;
