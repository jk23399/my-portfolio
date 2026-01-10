import React from 'react';
import avatar from '../assets/your_avatar.jpg';
import shuSushiImage from '../assets/shusushi.jpg';
import ordersImage from '../assets/orders.png';
import lenoverImage from '../assets/lenover.png';
import POSsystemImage from '../assets/POSsystem.png';
import googlePlayImage from '../assets/GoogleConsole.png';
import SystemArchitectureImage from '../assets/SystemArchitecture.png';
import KotlinImage from '../assets/kotlin.jpg';
import StationImage from '../assets/station.png';
import CalcuationImage from '../assets/gratuity.png';
import TableEditImage from '../assets/tableEdit.png';
import orderHistoryImage from '../assets/orderHistory.png';
import AbstractionImage from '../assets/menuAbstraction.png';
import PrinterSharingImage from '../assets/printSharing.png';
import AgileImage from '../assets/agile.png';

export default function SimplePOSReport() {
    return (
      <section id="report" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
  
          {/* --- Hero Header --- */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
              Custom Android POS Solution
            </h1>
            <h2 className="mt-4 text-2xl lg:text-3xl font-semibold text-gray-700">
              Engineering Offline-First Point of Sale System
            </h2>
            <div className="mt-6 flex items-center justify-center text-gray-500 text-sm space-x-3">
              <img
                src={avatar}
                alt="Author avatar"
                className="w-8 h-8 rounded-full"
              />
              <span><strong>Jooho Kim</strong></span>
              <span>·</span>
              <span>Arizona State University</span>
              <span>·</span>
              <span>Computer Science</span>
              <span>·</span>
              <span>Jan 2, 2026</span>
            </div>
          </header>

          {/* --- Cover Image --- */}
          <figure className="mb-16">
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border"
              title="SimplePOS Demo Video"
              src="https://www.youtube.com/embed/iL7OIdMazeI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <figcaption className="mt-3 text-center text-sm text-gray-500">
            Fig. 1 - Simple POS System Operation Demo
          </figcaption>
        </figure>

          {/* --- Main Content --- */}
          <article className="prose prose-lg lg:prose-xl max-w-none text-gray-700">
            {/* 1. The Problem Section - Refactored for Readability */}
            <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-8">
              1. User Story
            </h3>
            <div className="space-y-6 leading-relaxed">
              <p>
                <strong>Shu Sushi</strong> in Chandler, AZ, was operating without a digital POS system due to high costs. 
                This forced servers into a manual, error-prone workflow.
              </p>
              <figure className="mb-6">
              <img
                src={shuSushiImage}
                alt="Shu Sushi Restaurant"
                className="max-w-4xl mx-auto rounded-lg shadow-lg object-cover border"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 1 – Shu Sushi Restaurant in Chandler, AZ
              </figcaption>
            </figure>
              {/* Problem Box */}
              <p>
                <strong>Problem: </strong> Servers had to hand-write three separate tickets for Guest, Kitchen, Sushi Bar.<br />
                Also, they had to calculate the total price with a calculator. As a result, It was slow, messy, and mistakes happened constantly. <br />
              </p>
              <figure className="mb-3">
              <img
                src={ordersImage}
                alt="Customer, Sushi Bar, Kitchen Order Papers"
                className="max-w-md mx-auto rounded-lg shadow-lg object-cover border"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 2 – Customer, Sushi Bar, Kitchen Order Papers
              </figcaption>
              </figure>

              {/* Opportunity Box */}
              <p>
                <strong>The Opportunity:</strong> They have an old, unused <strong>Lenovo Tab M8 and Ethernet Thermal Printer </strong>
              </p>

              <figure className="mb-3">
              <img
                src={lenoverImage}
                alt="Lenovo M8 Tab and Ethernet Thermal Printer"
                className="max-w-md mx-auto rounded-lg shadow-lg object-cover border"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 3 – Lenovo M8 Tab and Ethernet Thermal Printer
              </figcaption>
              </figure>

              {/* Goal Box */}
              <p>
              <strong>My Goal:</strong> Build a $0 POS system by deploying a custom Kotlin app via Google Play that connects wirelessly to an Ethernet-based printer linked to the router.
              </p>
              <figure className="mb-3">
              <img
                src={POSsystemImage}
                alt="POS System"
                className="max-w-md mx-auto rounded-lg shadow-lg object-cover border"
              />

              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 4 – POS System
              </figcaption>
              </figure>
            </div>
          </article>

          {/* 2. Technical Stack Section */}

          <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-8 mt-12">
            2. Technical Stack & Architecture
          </h3>
          <div className="space-y-6 leading-relaxed">
            <p>
              The Lenovo TB-8505F isn't a powerful device. It has limited RAM and a weak CPU, 
              so I had to make smart choices about what tech to use.
            </p>
            <p>
              <strong>Native Android (Kotlin):</strong> I could've built this as a web app, 
              but web apps are slow on cheap tablets. Native Android gives me 60fps scrolling 
              and instant touch response—critical when servers are busy during rush hours.
            </p>

            {/* 2.1. Kotlin */}
            <figure className="mb-3">
              <img
                src={KotlinImage}
                alt="Kotlin"
                className="max-w-xl mx-auto rounded-lg shadow-lg object-cover border"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 5 – Kotlin and Android Studio
              </figcaption>
            </figure>

            {/* 2.2. System Architecture */}
            <p>
              <strong>Offline-First (SQLite/Room):</strong> The restaurant can't stop working 
              just because WiFi dies. Everything is stored locally in SQLite. Orders, menu items, 
              history—all of it works without internet. No cloud dependency during service.
            </p>

            <figure className="mb-3">
              <img
                src={SystemArchitectureImage}
                alt="System Architecture"
                className="max-w-xl mx-auto rounded-lg shadow-lg object-cover border"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 6 – System Architecture
              </figcaption>
            </figure>

            {/* 2.3. Google Play Console */}
            <p>
              <strong>Google Play Console:</strong> I deployed through Internal Testing track. 
              This means the owner gets automatic updates through the Play Store, just like any 
              normal app. No need to manually install APK files or ask me to come back every time 
              something needs to change.
            </p>
            <figure className="mb-3">
              <img
                src={googlePlayImage}
                alt="Google Play Internal Testing Deployment"
                className="max-w-xl mx-auto rounded-lg shadow-lg object-cover border"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 7 – Google Play Console Internal Testing Track
              </figcaption>
            </figure>
          </div>

          {/* 3. Key Features */}
          <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-8 mt-12">
            3. Key Features
          </h3>
          <div className="space-y-6 leading-relaxed">
            
            {/* 3.1. Station Setting */}
            <p>
              <strong>Customizable Station Routing:</strong> The owner can set each menu item to print at 
              Kitchen, Sushi Bar, or Both. When a server sends an order, the app automatically splits it—
              sushi items go to one printer, kitchen items to another, each with clear station headers. 
              No more manual ticket sorting.
            </p>

            <figure className="mb-3">
              <img
                src={StationImage}
                alt="StationImage"
                className="max-w-xl mx-auto rounded-lg shadow-lg object-cover border"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 8 – Station Setting
              </figcaption>
            </figure>

            {/* 3.2. Calculation */}
            <p>
              <strong>Automated Calculations:</strong> Arizona tax (8.6%) calculates automatically on every order. 
              Tip suggestions (15%, 18%, 20%) show up with one tap. No more pulling out calculators during dinner rush.
            </p>

            <figure className="mb-3">
              <img
                src={CalcuationImage}
                alt="Automated Calculations"
                className="max-w-xl mx-auto rounded-lg shadow-lg object-cover border"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 9 – Automated Calculations
              </figcaption>
            </figure>

            {/* 3.3. Live Editor */}
            <p>
              <strong>Live Admin Editor:</strong> The owner can add new menu items, edit prices, and rearrange 
              table layouts directly from the tablet. No need to text me at 3pm asking to update the salmon price. 
              Changes apply instantly across the whole system.
            </p>

            <figure className="mb-3">
              <img
                src={TableEditImage}
                alt="Table Editor"
                className="max-w-xl mx-auto rounded-lg shadow-lg object-cover border"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 10 – Table Editor
              </figcaption>
            </figure>

            {/* 3.4. Order History */}
            <p>
              <strong>3-Year Local Archive:</strong> Every receipt from the past 3 years is stored locally in SQLite. 
              Servers can search by date and reprint any old ticket in seconds—even when WiFi is down. 
              This saved them multiple times when customers called asking about charges from months ago.
            </p>

            <figure className="mb-3">
              <img
                src={orderHistoryImage}
                alt="Order History"
                className="max-w-xl mx-auto rounded-lg shadow-lg object-cover border"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 11 – Order History
              </figcaption>
            </figure>
            
          </div>

        {/* 4. Engineering Challenges */}
        <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-8 mt-12">
          4. Engineering Challenges
        </h3>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              4.1. Too Many Menu Items
            </h4>
            <p className="mb-4">
              The restaurant has 100+ menu items. On an 8-inch tablet screen, this meant endless scrolling. 
              Servers were getting frustrated trying to find items during busy hours.
            </p>

            {/* 4.1. Abstraction */}
            <figure className="mb-3">
              <img
                src={AbstractionImage}
                alt="Abstraction"
                className="max-w-xl mx-auto rounded-lg shadow-lg object-cover border"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                Fig. 11 – Menu Abstraction
              </figcaption>
            </figure>
            <p className="mb-4">
              <strong>Solution:</strong> I grouped similar items together. For example, instead of listing 
              "Chicken Katsu" and "Pork Katsu" as separate buttons, I made one "Katsu" button that opens 
              options for Chicken or Pork. This cut down the visible menu by about 60%. Servers can now 
              find what they need in 2-3 taps instead of scrolling through five screens.
            </p>
          </div>

          <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            4.2. Printer Sharing Problem
          </h4>
          <p className="mb-4">
            They only have one thermal printer, but it needs to handle orders from multiple sources: 
            my POS tablet, plus their DoorDash, UberEats, and Grubhub tablets. Four different devices, 
            one printer.
          </p>

          {/* 4.2. Printer Sharing */}
          <figure className="mb-3">
            <img
              src={PrinterSharingImage}
              alt="Printer Sharing"
              className="max-w-xl mx-auto rounded-lg shadow-lg object-cover border"
            />
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              Fig. 12 – Printer Sharing
            </figcaption>
          </figure>

          <p className="mb-4">
            <strong>Solution:</strong> Connected the printer to the router via ethernet cable and gave it 
            a static IP address. All tablets—mine and the third-party delivery ones—send print jobs over 
            WiFi using TCP/IP sockets. Everything routes through the network to the same printer. 
            Works reliably even when individual tablets go offline.
          </p>
          </div>
        </div>

        {/* 5. What's Next */}
        <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-8 mt-12">
          5. What's Next
        </h3>
        <div className="space-y-6 leading-relaxed">


          {/* 5.1. Agile */}
          <p>
          I had 2 weeks to build this with zero Kotlin experience. Used AI tools to generate code fast, 
          then iterated based on real server feedback during actual service hours. Classic Agile approach — deploy, watch them use it, fix issues on the spot, repeat.
          </p>

          <figure className="mb-3">
            <img
              src={AgileImage}
              alt="Agile"
              className="max-w-xl mx-auto rounded-lg shadow-lg object-cover border"
            />
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              Fig. 13 – Agile and AI tool
            </figcaption>
          </figure>

          <p>
            The biggest limitation right now is payment processing—they still use a separate card reader. 
            I'm planning to integrate Stripe's payment SDK so servers can take payments directly in the app. 
            That would make it a true all-in-one POS system.
          </p>
</div>
          
        </div>
      </section>
    );
  }