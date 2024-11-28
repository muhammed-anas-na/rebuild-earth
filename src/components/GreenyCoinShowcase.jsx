"use client";
import React, { useState } from 'react';
import { Coins, Gift, Tree, Medal, Info, Ticket } from 'lucide-react';

// Extracting render functions to separate components to improve modularity
const UsageTab = ({ coinData }) => (
    <div className="bg-emerald-900/30 p-6 rounded-2xl space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Coins className="w-8 h-8 text-emerald-300" />
          <h2 className="text-2xl font-bold text-emerald-300">
            Use Greeny Coins
          </h2>
        </div>
        <Medal className="w-8 h-8 text-yellow-400" />
      </div>
  
      {/* Description */}
      <p className="text-emerald-100">
        Greeny Coins can be redeemed at partner businesses to enjoy rewards and discounts. 
        Use your coins wisely to support eco-friendly initiatives and save money!
      </p>
  
      {/* Usage Details */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Gift className="w-6 h-6 text-emerald-300 mt-1" />
          <div>
            <h3 className="font-semibold text-emerald-200">Restaurant Discounts</h3>
            <p className="text-emerald-100 text-sm">
              Redeem your coins for discounts at eco-friendly partner restaurants.
            </p>
          </div>
        </div>
  
        <div className="flex items-start gap-3">
   
          <Ticket className="w-6 h-6 text-emerald-300 mt-1"  />
          <div>
            <h3 className="font-semibold text-emerald-200">Theatre Tickets</h3>
            <p className="text-emerald-100 text-sm">
              Enjoy discounts on movie tickets at participating theatres.
            </p>
          </div>
        </div>
  
        <div className="flex items-start gap-3">
          <Coins className="w-6 h-6 text-emerald-300 mt-1" />
          <div>
            <h3 className="font-semibold text-emerald-200">Eco-Product Purchases</h3>
            <p className="text-emerald-100 text-sm">
              Use coins to buy eco-friendly products like reusable bottles and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  

const CoinsTab = ({ coinData }) => (
<div className="bg-emerald-900/30 p-6 rounded-2xl space-y-4">
  <h2 className="text-xl sm:text-2xl font-semibold text-emerald-300 mb-4">
    Our Coins
  </h2>
  {coinData.rewardHistory.map((reward) => (
    <div 
      key={reward.id} 
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-emerald-900/50 p-4 rounded-lg gap-3 sm:gap-0"
    >
      <div className="flex items-center gap-2">
        {reward.id === 1 && (
          <img 
            src="coin05.jpeg" 
            className="w-8 h-8 rounded-full" 
            alt="5 Coin" 
          />
        )}
        {reward.id === 2 && (
          <img 
            src="coin10.jpeg" 
            className="w-8 h-8 rounded-full" 
            alt="10 Coin" 
          />
        )}
        {reward.id === 3 && (
          <img 
            src="coin50.jpeg" 
            className="w-8 h-8 rounded-full" 
            alt="50 Coin" 
          />
        )}
        <p className="text-emerald-200 font-medium text-sm sm:text-base">
          {reward.name}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Coins className="w-5 h-5 text-yellow-400" />
        <span className="text-emerald-100 text-sm sm:text-base">
          +{reward.coins}
        </span>
      </div>
    </div>
  ))}
</div>

);

const RewardsTab = ({ coinData }) => (
<div className="bg-emerald-900/30 p-6 rounded-2xl space-y-4">
  <h2 className="text-xl sm:text-2xl font-semibold text-emerald-300 mb-4">
    Redeemable Rewards
  </h2>
  {coinData.redeemableRewards.map((reward, index) => (
    <div 
      key={index} 
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-emerald-900/50 p-4 rounded-lg gap-4 sm:gap-0"
    >
      <div>
        <p className="text-emerald-200 font-medium text-sm sm:text-base">
          {reward.name}
        </p>
        <p className="text-sm sm:text-base text-emerald-300">
          {reward.description}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="flex items-center gap-2">
          <Coins className="w-5 h-5 text-yellow-400" />
          <span className="text-emerald-100 text-sm sm:text-base">
            {reward.coinCost}
          </span>
        </div>
        <a 
          href="https://wa.me/message/OPDUGZOGCJ2WN1" 
          className="bg-emerald-600 text-white px-3 py-1 rounded-full hover:bg-emerald-700 transition-colors text-center text-sm sm:text-base"
        >
          Redeem
        </a>
      </div>
    </div>
  ))}
</div>

);

const AboutTab = () => (
    <div className="bg-emerald-900/30 p-6 rounded-2xl space-y-4">
    <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
      <div className="w-full lg:w-1/3 bg-emerald-900/50 rounded-lg p-4 flex items-center justify-center">
        <img 
          src="coin50.jpeg" 
          alt="Greeny Coin" 
          className="max-w-full h-auto rounded-2xl"
        />
      </div>
      <div className="w-full lg:w-2/3 text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-emerald-300 mb-3">
          Greeny Coin: Eco-Rewards System
        </h2>
        <p className="text-emerald-100 text-sm sm:text-base">
          An innovative rewards platform that turns sustainable actions into valuable coins. 
          Inspired by traditional community exchange practices, Greeny Coin motivates 
          environmental participation through tangible rewards.
        </p>
      </div>
    </div>
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row items-start gap-3">
        <Medal className="w-6 h-6 text-emerald-300 mt-1 sm:mt-0"/>
        <div>
          <h3 className="font-semibold text-emerald-200">Earn by Doing Good</h3>
          <p className="text-emerald-100 text-sm sm:text-base">
            Plant trees, attend workshops, reduce carbon footprint - each action earns coins.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-3">
        <Coins className="w-6 h-6 text-emerald-300 mt-1 sm:mt-0"/>
        <div>
          <h3 className="font-semibold text-emerald-200">Flexible Redemption</h3>
          <p className="text-emerald-100 text-sm sm:text-base">
            Redeem coins at partner businesses for eco-friendly products and discounts.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-3">
        <Gift className="w-6 h-6 text-emerald-300 mt-1 sm:mt-0"/>
        <div>
          <h3 className="font-semibold text-emerald-200">Community Impact</h3>
          <p className="text-emerald-100 text-sm sm:text-base">
            Every coin represents a step towards collective environmental restoration.
          </p>
        </div>
      </div>
    </div>
  </div>
  
);

const GreenyCoinShowcase = () => {
  const [activeTab, setActiveTab] = useState('about');
  
  const coinData = {
    totalCoins: 420,
    rewardHistory: [
      { id: 1, name: "Tree Planting", coins: 5, date: "Oct 15, 2024" },
      { id: 2, name: "Recycling Workshop", coins: 10, date: "Oct 22, 2024" },
      { id: 3, name: "Carbon Footprint Reduction", coins: 50, date: "Nov 5, 2024" }
    ],
    redeemableRewards: [
      { 
        name: "Eco-Friendly Notebook", 
        coinCost: 100, 
        description: "Sustainable notebook made from recycled materials"
      },
      { 
        name: "Reusable Water Bottle", 
        coinCost: 150, 
        description: "Stainless steel bottle to reduce plastic waste"
      },
      { 
        name: "Tree Planting Kit", 
        coinCost: 200, 
        description: "Complete kit for planting and nurturing a tree" 
      }
    ]
  };

  return (
    <div className="bg-[#1E4D37] text-white min-h-screen p-4 sm:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
      {['about', 'Coins', 'rewards', 'Usage'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`capitalize px-4 py-2 rounded-full transition-colors ${
            activeTab === tab 
              ? 'bg-emerald-600 text-white' 
              : 'bg-emerald-900/30 text-emerald-300 hover:bg-emerald-900/50'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

        {activeTab === 'about' && <AboutTab />}
        {activeTab === 'Coins' && <CoinsTab coinData={coinData} />}
        {activeTab === 'Usage' && <UsageTab coinData={coinData} />}
        {activeTab === 'rewards' && <RewardsTab coinData={coinData} />}
      </div>
    </div>
  );
};

export default GreenyCoinShowcase;