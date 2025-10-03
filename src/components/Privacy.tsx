import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Privacy: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background patterns */}
      <div className="fixed inset-0 z-[-1] grid-pattern"></div>
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-[#0A0E27] via-fuchsia-900/10 to-[#0A0E27]"></div>
      
      <Header />
      
      <div className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
            >
              ← Back to Home
            </button>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="24"
                  height="24"
                  rx="6"
                  stroke="#ec4899"
                  strokeWidth="3"
                />
                <path
                  d="M9 14L13 18L19 10"
                  stroke="#ec4899"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold leading-tight">
                Privacy Policy
              </h1>
            </div>
          </div>

          <div className="glassmorphism rounded-2xl p-8 md:p-12 border border-purple-500/30">
            <div className="prose prose-slate prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">Privacy Notice</h2>
              <p className="text-lg text-gray-300 mb-8"><strong>Effective Date: June 6, 2024</strong></p>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                This privacy notice for Skippr Ltd. ('Company', 'we', 'us', or 'our'), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services'), such as when you:
              </p>
              
              <ul className="text-gray-300 mb-6 list-disc pl-6 space-y-1">
                <li>Visit our website at https://skippr.com, or any website of ours that links to this privacy notice</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:privacy@skippr.com" className="text-fuchsia-400 hover:text-fuchsia-300">privacy@skippr.com</a>.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">SUMMARY OF KEY POINTS</h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                This summary provides key points from our privacy notice, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.
              </p>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-fuchsia-500 pl-4">
                  <p className="text-gray-300"><strong className="text-white">What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Skippr Ltd. and the Services, the choices you make, and the products and features you use. <button onClick={() => scrollToSection('section-1')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">Click here to learn more.</button></p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-4">
                  <p className="text-gray-300"><strong className="text-white">Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-4">
                  <p className="text-gray-300"><strong className="text-white">Do we receive any information from third parties?</strong> We do not receive any information from third parties.</p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-4">
                  <p className="text-gray-300"><strong className="text-white">How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. <button onClick={() => scrollToSection('section-2')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">Click here to learn more.</button></p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-4">
                  <p className="text-gray-300"><strong className="text-white">In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. <button onClick={() => scrollToSection('section-4')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">Click here to learn more.</button></p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-4">
                  <p className="text-gray-300"><strong className="text-white">How do we keep your information safe?</strong> We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. <button onClick={() => scrollToSection('section-7')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">Click here to learn more.</button></p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-4">
                  <p className="text-gray-300"><strong className="text-white">What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. <button onClick={() => scrollToSection('section-9')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">Click here to learn more.</button></p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-4">
                  <p className="text-gray-300"><strong className="text-white">How do you exercise your rights?</strong> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6" id="toc">TABLE OF CONTENTS</h2>
              
              <ol className="text-gray-300 mb-8 list-decimal pl-6 space-y-2">
                <li><button onClick={() => scrollToSection('section-1')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">WHAT INFORMATION DO WE COLLECT?</button></li>
                <li><button onClick={() => scrollToSection('section-2')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">HOW DO WE PROCESS YOUR INFORMATION?</button></li>
                <li><button onClick={() => scrollToSection('section-3')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</button></li>
                <li><button onClick={() => scrollToSection('section-4')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</button></li>
                <li><button onClick={() => scrollToSection('section-5')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</button></li>
                <li><button onClick={() => scrollToSection('section-6')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">HOW LONG DO WE KEEP YOUR INFORMATION?</button></li>
                <li><button onClick={() => scrollToSection('section-7')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">HOW DO WE KEEP YOUR INFORMATION SAFE?</button></li>
                <li><button onClick={() => scrollToSection('section-8')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">DO WE COLLECT INFORMATION FROM MINORS?</button></li>
                <li><button onClick={() => scrollToSection('section-9')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">WHAT ARE YOUR PRIVACY RIGHTS?</button></li>
                <li><button onClick={() => scrollToSection('section-10')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">CONTROLS FOR DO-NOT-TRACK FEATURES</button></li>
                <li><button onClick={() => scrollToSection('section-11')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</button></li>
                <li><button onClick={() => scrollToSection('section-12')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">DO WE MAKE UPDATES TO THIS NOTICE?</button></li>
                <li><button onClick={() => scrollToSection('section-13')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</button></li>
                <li><button onClick={() => scrollToSection('section-14')} className="text-fuchsia-400 hover:text-fuchsia-300 underline">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</button></li>
              </ol>

              {/* Section 1 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-1">1. WHAT INFORMATION DO WE COLLECT?</h2>
              
              <h3 className="text-xl font-semibold text-white mb-4">Personal information you disclose to us</h3>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> We collect personal information that you provide to us.</p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>

              <p className="text-gray-300 mb-4"><strong className="text-white">Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
              
              <ul className="text-gray-300 mb-6 list-disc pl-6 space-y-1">
                <li>names</li>
                <li>email addresses</li>
              </ul>

              <p className="text-gray-300 mb-6"><strong className="text-white">Sensitive Information.</strong> We do not process sensitive information.</p>

              <p className="text-gray-300 mb-8">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

              <h3 className="text-xl font-semibold text-white mb-4">Information automatically collected</h3>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
              </p>

              <p className="text-gray-300 mb-4">Like many businesses, we also collect information through cookies and similar technologies.</p>

              <p className="text-gray-300 mb-4">The information we collect includes:</p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-white font-semibold mb-2">Log and Usage Data.</p>
                  <p className="text-gray-300">Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Device Data.</p>
                  <p className="text-gray-300">We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</p>
                </div>
              </div>

              {/* Section 2 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-2">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>

              <p className="text-gray-300 mb-4">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
              
              <ul className="text-gray-300 mb-8 list-disc pl-6 space-y-2">
                <li>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                <li>To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.</li>
                <li>To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                <li>To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
                <li>To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
                <li>To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see 'WHAT ARE YOUR PRIVACY RIGHTS?' below).</li>
                <li>To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
                <li>To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
                <li>To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
              </ul>

              {/* Section 3 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-3">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</p>

              <p className="text-gray-300 mb-4"><strong>If you are located in the EU or UK, this section applies to you.</strong></p>

              <p className="text-gray-300 mb-4">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
              
              <ul className="text-gray-300 mb-8 list-disc pl-6 space-y-2">
                <li><strong className="text-white">Consent.</strong> We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
                <li><strong className="text-white">Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
                <li><strong className="text-white">Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Send users information about special offers and discounts on our products and services</li>
                    <li>Analyse how our services are used so we can improve them to engage and retain users</li>
                    <li>Diagnose problems and/or prevent fraudulent activities</li>
                    <li>Understand how our users use our products and services so we can improve user experience</li>
                  </ul>
                </li>
                <li><strong className="text-white">Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                <li><strong className="text-white">Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
              </ul>

              {/* Section 4 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-4">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>

              <p className="text-gray-300 mb-4">We may need to share your personal information in the following situations:</p>
              
              <ul className="text-gray-300 mb-8 list-disc pl-6">
                <li><strong className="text-white">Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul>

              {/* Section 5 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-5">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>

              <p className="text-gray-300 mb-8">We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

              {/* Section 6 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-6">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.</p>

              <p className="text-gray-300 mb-4">We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>

              <p className="text-gray-300 mb-8">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

              {/* Section 7 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-7">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> We aim to protect your personal information through a system of organisational and technical security measures.</p>

              <p className="text-gray-300 mb-8">We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

              {/* Section 8 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-8">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</p>

              <p className="text-gray-300 mb-8">We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:privacy@skippr.com" className="text-fuchsia-400 hover:text-fuchsia-300">privacy@skippr.com</a>.</p>

              {/* Section 9 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-9">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>

              <p className="text-gray-300 mb-4">In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.</p>

              <p className="text-gray-300 mb-4">We will consider and act upon any request in accordance with applicable data protection laws.</p>

              <p className="text-gray-300 mb-4">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" className="text-fuchsia-400 hover:text-fuchsia-300">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.</p>

              <p className="text-gray-300 mb-8">If you are located in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" className="text-fuchsia-400 hover:text-fuchsia-300">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.</p>

              {/* Section 10 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-10">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
              <p className="text-gray-300 mb-8">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>

              {/* Section 11 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-11">11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>

              <p className="text-gray-300 mb-8">California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>

              {/* Section 12 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-12">12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
              <p className="text-gray-300 mb-4"><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

              <p className="text-gray-300 mb-8">We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

              {/* Section 13 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-13">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO) by email at <a href="mailto:dpo@skippr.com" className="text-fuchsia-400 hover:text-fuchsia-300">dpo@skippr.com</a>, or for general privacy inquiries at <a href="mailto:privacy@skippr.com" className="text-fuchsia-400 hover:text-fuchsia-300">privacy@skippr.com</a>, or by post to:
              </p>

              <div className="glassmorphism rounded-xl p-6 border border-fuchsia-500/30 mb-8">
                <p className="text-white font-semibold mb-2">Skippr Ltd.</p>
                <p className="text-gray-300">Data Protection Officer</p>
                <p className="text-gray-300">99 Milton Keynes Business Centre</p>
                <p className="text-gray-300">Foxhunter Drive, Linford Wood</p>
                <p className="text-gray-300">Milton Keynes, Buckinghamshire MK14 6GD</p>
                <p className="text-gray-300">England</p>
              </div>

              {/* Section 14 */}
              <h2 className="text-2xl font-bold text-white mb-6 pt-8" id="section-14">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
              
              <p className="text-gray-300 mb-8">You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please contact us using the information provided in section 13 above.</p>

              <hr className="border-slate-700 my-8" />
              
              <p className="text-gray-400 text-center text-sm">
                This privacy policy is effective as of June 6, 2024. For any questions, please contact us at <a href="mailto:privacy@skippr.com" className="text-fuchsia-400 hover:text-fuchsia-300">privacy@skippr.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;