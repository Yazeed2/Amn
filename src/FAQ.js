import React from 'react';
import FAQ1 from './images/FAQ1.jpeg'
import './FAQ.css';


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example() {

    return (
        <div className="FAQ" style={{ marginBottom: '10%' }} >


            <img src={FAQ1} style={{ height: "500px", width: "800px" }} />
            <div className="FA" dir="rtl" >
                <Accordion style={{ textAlign: 'right', marginTop: '20%' }} >
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton style={{ textAlign: 'right' }}>
                                {"                    كيف أحصل على الخدمة؟           "}                   </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                من خلال شركة الشحن سوف تقوم بإرسال بياناتك لنا ونقوم بإرسال الباركود لك ليسهل عليك تلقي شُحنتك

                    </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton style={{ textAlign: 'right' }}>
                                هل يتطلب توقيع العميل عند استلام الشحنة؟
                    </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                لا، تكتفي بإظهار الباركود المرسل على إيميلك أو رقمك الشخصي

                    </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton style={{ textAlign: 'right' }}>
                                هل يمكنني تقييم الخدمة؟
                    </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                بالتأكيد يمكنك تقييم الخدمة المقدمة، وعلى أساسها نستطيع أن نعرف رضا تعاملك معنا أو عدم رضاك عن الخدمة
                                ونوفر الحلول المتاحة بالنسبة لك


                    </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    );
}