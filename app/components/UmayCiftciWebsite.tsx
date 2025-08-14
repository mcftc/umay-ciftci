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
      alert('í±¶ Gugu gaga! Bi\'ÅŸeyler yazman lazÄ±m! (Tutar girmeyi unuttun galiba hihi)');
      return;
    }

    const message = type === 'haytap' 
      ? `í°¾ Vay vay vay! ${amount} â‚º ile kÃ¶pÃ¼ÅŸlere mama alÄ±caz! Ã‡ok saÄŸ ol! Ben de onlarÄ± seviyom! í°¶`
      : `í±¶ YAAAYYYY! ${amount} â‚º benim iÃ§in! ArtÄ±k ${Math.floor(parseFloat(amount)/50)} tane Ã§Ä±ngÄ±rak alabilirim! TeÅŸekkÃ¼r ederimmm! í¾‰`;
    
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
        {['í¼ˆ', 'â˜ï¸', 'â­', 'í¶‹', 'í¾ˆ', 'í·¸', 'í½¼', 'í±¶'].map((emoji, i) => (
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
              <span className="ml-4">í±¶</span>
            </h1>
            <div className="text-2xl text-gray-700 mb-4 font-comic">
              Ben <span className="font-bold text-pink-600">UMAY Ã‡Ä°FTÃ‡Ä°</span>! 
            </div>
            <p className="text-lg text-gray-600 font-comic">
              HenÃ¼z doÄŸmadÄ±m ama web sitemi yaptÄ±m bile! í¸
            </p>
            <p className="text-sm text-gray-500 mt-2 font-comic">
              (Annem babam yardÄ±m etti birazcÄ±k ama sshhh í´«)
            </p>
          </div>
          
          {/* Floating baby accessories */}
          <div className="absolute -top-4 -left-4 text-4xl animate-spin-slow cursor-pointer" onClick={(e) => handleEmojiClick('í½¼', e)}>í½¼</div>
          <div className="absolute -top-4 -right-4 text-4xl animate-bounce cursor-pointer" onClick={(e) => handleEmojiClick('í¾€', e)}>í¾€</div>
          <div className="absolute -bottom-4 left-1/2 text-4xl animate-pulse cursor-pointer" onClick={(e) => handleEmojiClick('í±£', e)}>í±£</div>
        </header>

        {/* Countdown with Baby Talk */}
        <div className="bg-gradient-to-r from-pink-300 to-purple-300 rounded-3xl p-6 mb-8 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 font-comic">
            í¾‰ DOÄMAMA NE KADAR KALDI? í¾‰
          </h2>
          <div className="text-center mb-4 text-white">
            <p className="text-lg font-comic">
              SabÄ±rsÄ±zlanÄ±yorummm! DÃ¼nyayÄ± gÃ¶rmek iÃ§in can atÄ±yorum! í¼
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { value: countdown.days, label: 'Uyku', emoji: 'í¸´' },
              { value: countdown.hours, label: 'SÃ¼t', emoji: 'í½¼' },
              { value: countdown.minutes, label: 'Gaz', emoji: 'í²¨' },
              { value: countdown.seconds, label: 'HÄ±Ã§kÄ±rÄ±k', emoji: 'í´­' }
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
            <span className="text-pink-500">BANA HEDÄ°YE ALMAK Ä°STER MÄ°SÄ°N?</span> í¾
          </h2>
          <p className="text-center text-lg mb-4 font-comic">
            Yaa ÅŸey... í±‰í±ˆ Ben daha doÄŸmadÄ±m ama ÅŸimdiden hazÄ±rlÄ±k yapmak lazÄ±m di mi?
          </p>
          <p className="text-center text-md text-gray-600 font-comic">
            Hem bana hem de sevimli hayvanlara yardÄ±m edebilirsin! Ben hayvanlarÄ± Ã§oook seviyorum! í°¾
          </p>
        </div>

        {/* Donation Cards - Baby Style */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Haytap Card */}
          <div className="bg-yellow-100 rounded-3xl p-6 shadow-xl transform -rotate-2 hover:rotate-0 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 text-8xl opacity-10">í°¾</div>
            
            <div className="flex justify-center gap-2 mb-4 text-4xl">
              <Dog className="w-10 h-10 text-brown-600 animate-bounce" />
              <Cat className="w-10 h-10 text-gray-600 animate-bounce" style={{animationDelay: '0.2s'}} />
              <Bird className="w-10 h-10 text-blue-600 animate-bounce" style={{animationDelay: '0.4s'}} />
              <Rabbit className="w-10 h-10 text-pink-600 animate-bounce" style={{animationDelay: '0.6s'}} />
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4 font-comic">
              SOKAK HAYVANLARÄ° Ä°Ã‡Ä°N! í°•
            </h3>
            
            <div className="bg-white/80 rounded-xl p-4 mb-4">
              <p className="text-center font-comic">
                Biliyomusun? Sokakta yaÅŸayan kÃ¶pÃ¼ÅŸler ve kediÅŸler var! í¸¢
                Onlara mama ve yuva lazÄ±m! Sen de yardÄ±m eder misin?
                Ben doÄŸunca onlarla oynayacaÄŸÄ±m! í´—
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { amount: 50, text: '1 Kap Mama' },
                { amount: 100, text: '2 Kap Mama' },
                { amount: 250, text: '5 Kap Mama' },
                { amount: 500, text: 'Koca Ã‡uval!' }
              ].map(item => (
                <button
                  key={item.amount}
                  onClick={() => setHaytapAmount(item.amount.toString())}
                  className="bg-orange-400 hover:bg-orange-500 text-white rounded-xl py-2 px-3 font-bold transform hover:scale-105 transition-all shadow-lg font-comic"
                >
                  {item.amount}â‚º<br/>
                  <span className="text-xs">{item.text}</span>
                </button>
              ))}
            </div>

            <input
              type="number"
              value={haytapAmount}
              onChange={(e) => setHaytapAmount(e.target.value)}
              placeholder="BaÅŸka bi' tutar?"
              className="w-full p-3 border-4 border-orange-300 rounded-xl mb-4 text-center font-bold font-comic"
            />

            <button
              onClick={() => handleDonation('haytap')}
              className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-2xl py-4 font-bold text-lg transform hover:scale-105 transition-all shadow-xl animate-pulse font-comic"
            >
              HAYDÄ° MAMA ALALIM! í°¾
            </button>
          </div>

          {/* Umay's Card */}
          <div className="bg-pink-100 rounded-3xl p-6 shadow-xl transform rotate-2 hover:rotate-0 transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 text-8xl opacity-10">í±¶</div>
            
            <div className="text-center mb-4">
              <div className="text-6xl animate-bounce inline-block">ï¿½ï¿½</div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4 font-comic">
              UMAY'IN KUMBARASI! ï¿½ï¿½
            </h3>
            
            <div className="bg-white/80 rounded-xl p-4 mb-4">
              <p className="text-center font-comic">
                Ehehe... í¹ˆ Benim de biraz biberona, Ã§Ä±ngÄ±raÄŸa, 
                yumuÅŸacÄ±k battaniyeye falan ihtiyacÄ±m olacak!
                Bir de belki oyuncak? í·¸ Belki iki oyuncak? 
                Belki... Ã§ok oyuncak? í¸
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { amount: 100, text: '2 Biberon' },
                { amount: 250, text: '1 Uyku Tulumu' },
                { amount: 500, text: 'Oyuncak Dolu Sepet' },
                { amount: 1000, text: 'SÃœPER BEBEK SETÄ°!' }
              ].map(item => (
                <button
                  key={item.amount}
                  onClick={() => setUmayAmount(item.amount.toString())}
                  className="bg-pink-400 hover:bg-pink-500 text-white rounded-xl py-2 px-3 font-bold transform hover:scale-105 transition-all shadow-lg font-comic"
                >
                  {item.amount}â‚º<br/>
                  <span className="text-xs">{item.text}</span>
                </button>
              ))}
            </div>

            <input
              type="number"
              value={umayAmount}
              onChange={(e) => setUmayAmount(e.target.value)}
              placeholder="BaÅŸka bi' tutar?"
              className="w-full p-3 border-4 border-pink-300 rounded-xl mb-4 text-center font-bold font-comic"
            />

            <button
              onClick={() => handleDonation('baby')}
              className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-2xl py-4 font-bold text-lg transform hover:scale-105 transition-all shadow-xl animate-pulse font-comic"
            >
              UMAY'A HEDÄ°YE! í¾
            </button>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="bg-gradient-to-r from-green-200 to-blue-200 rounded-3xl p-6 mb-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-4 font-comic">
            í¼Ÿ UMAY HAKKINDA EÄLENCE BÄ°LGÄ°LER í¼Ÿ
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/80 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">í±‘</div>
              <p className="font-comic">
                AdÄ±m UMAY! TÃ¼rk mitolojisinde Ã§ocuklarÄ± koruyan tanrÄ±Ã§anÄ±n adÄ±ymÄ±ÅŸ! Cool di mi?
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">í¾‚</div>
              <p className="font-comic">
                5 EylÃ¼l 2025'te doÄŸacaÄŸÄ±m! BaÅŸak burcuyum! â™
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">í¾¨</div>
              <p className="font-comic">
                En sevdiÄŸim renkler... Aaa dur henÃ¼z gÃ¶rmedim ki renkleri! í´”
              </p>
            </div>
          </div>
        </div>

        {/* Baby's Message */}
        <div className="bg-white/90 rounded-3xl p-6 mb-8 shadow-xl text-center">
          <h3 className="text-2xl font-bold mb-4 font-comic">
            í²Œ UMAY'DAN MESAJ VAR! í²Œ
          </h3>
          <p className="text-lg mb-4 font-comic">
            Sevgili bÃ¼yÃ¼kler! í±‹
          </p>
          <p className="mb-3 font-comic">
            Ben henÃ¼z annemin karnÄ±ndayÄ±m ama Ã§ok heyecanlÄ±yÄ±m! 
            DÃ¼nyaya gelince sizinle tanÄ±ÅŸmak iÃ§in sabÄ±rsÄ±zlanÄ±yorum!
          </p>
          <p className="mb-3 font-comic">
            EÄŸer bana veya sevimli hayvanlara yardÄ±m ederseniz,
            doÄŸunca size Ã§ooook bÃ¼yÃ¼k gÃ¼lÃ¼cÃ¼kler gÃ¶ndereceÄŸim! í¸Š
          </p>
          <p className="font-bold text-pink-600 font-comic">
            Gugu gaga! (Bu "teÅŸekkÃ¼rler" demek bebek dilinde!)
          </p>
          <div className="mt-4 text-4xl">
            í±¶í²•í¼ˆ
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-700 mt-8">
          <p className="text-xl mb-2 font-comic">
            í¾ˆ umayciftci.com í¾ˆ
          </p>
          <p className="text-sm font-comic">
            Â© 2025 Baby Umay Productions í±¶
          </p>
          <p className="text-xs mt-2 text-gray-500 font-comic">
            (Annem babam biraz yardÄ±m etti ama ben yÃ¶nettim projeyi!)
          </p>
        </footer>
      </div>
    </div>
  );
};

export default UmayCiftciWebsite;
