import React from 'react';
import { Info, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';

const Event = () => {
  return (
    <>
    <Header/>
    <div className="bg-[#1E4D37] p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - Image */}
          <Card className="overflow-hidden rounded-3xl">
            <img
              src="image01.jpg"
              alt="Eroded landscape in Tanzania showing severe soil degradation"
              className="w-full h-full object-cover"
            />
          </Card>

          {/* Right side - Content */}
          <div className="text-emerald-300 space-y-6">
            <div className="uppercase tracking-wider text-sm">Context</div>
            
            <h1 className="text-4xl font-semibold text-emerald-300 leading-tight">
              On eroded soils, society erodes too.
            </h1>
                <p className='flex items-center text-xs'><MapPin size={20} />Aluva</p>
            <div className="space-y-4">
              <p className="text-white/90">
                Deforestation <Info className="inline h-4 w-4 text-emerald-300" /> is a significant 
                problem in Tanzania: there has been an estimated annual loss of about 403,000 
                hectares of forest between 2010 and 2020. Forests in Tanzania cover 35% of the 
                land area, but the deforestation rate is approaching 1.5% per year.
              </p>

              <p className="text-white/90">
                The main causes of deforestation include large-scale agriculture, rural sprawl, 
                illegal logging and charcoal production. Soil becomes depleted and unsuitable 
                for life, and it slowly turns into desert. Desertification <Info className="inline h-4 w-4 text-emerald-300" /> 
                makes soils unproductive. This creates food instability and forces people to 
                migrate in search of better land. While soil erosion destroys roads, divides 
                fields, increases isolation and endangers livestock, it also creates tensions 
                and conflicts among people.
              </p>

              <p className="text-white/90">
                In Tanzania, we develop our reforestation <Info className="inline h-4 w-4 text-emerald-300" /> 
                project in collaboration with <span className="underline">our local partner WAEV</span>: 
                our aim is to empower Maasai families by equipping them with the tools to protect 
                their land from soil erosion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Event;