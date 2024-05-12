"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import { GridBackgroundDemoLarge } from '../ui/GridLarge';
import { MeteorsDemo } from '../components/Metors';
import { MeteorsDemoGraduateApprentice } from '../components/Metors2';
import { MeteorsDemoWebDesignIntern } from '../components/Metors3';

export function ExperienceSection() {
  return (
    <GridBackgroundDemoLarge>
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <div className=""> <MeteorsDemo/></div>
        <div className="mt-10"> <MeteorsDemoGraduateApprentice/></div>
        <div className="mt-10"> <MeteorsDemoWebDesignIntern/></div>
       
        {/* <MeteorsDemoGraduateApprentice/>
        <MeteorsDemoWebDesignIntern/>
       */}
      </div>
    </TracingBeam>
    </GridBackgroundDemoLarge>
  );
}

