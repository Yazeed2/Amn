import React, { Component } from 'react'
import App from './App'
import './About.css';
import photo from './images/photo.jpeg'




export default class Home extends Component {
    render() {
        return (

            <div dir="rtl">
                <br />
                <div>
                    <div type="submit" className=" btn-primary " style={{ marginLeft: '90%' }} >من نحن ؟</div>
                    <p className="contact" style={{ marginLeft: '62%' }}>
                        <br />  تطبيق آمن تابع لجميع شركات النقل في المملكة يساعدك بالحصول على شُحنتك
                        <br />  بشكل آمن يعتمد على التقنيات الحديثة حيث يوفر التطبيق باركود يصلك على هاتفك المسجل على الشُحنة
يوجد بها كل بياناتك وفي حال وصول السائق إليك لا عليك إلا إظهار الباركود المُرسل


    </p>
                </div>
                <div>
                    <div className=" btn-primary" style={{ marginLeft: '90%' }}>مهمتنا </div>
                    <p className="contact" style={{ marginLeft: '62%' }}>
                        نحن ملتزمون بتقديم خدماتنا بدرجة عالية من الكفاءة لنكون دائماً عند حسن ظن عملائنا ما نقدمه يختلف عن منافسيننا فنحن نهتم بالأداء والجودة إلى أبعد حد لتصلك خدمة تفوق كل توقعاتك
    </p>
                </div>
                <div>
                    <div type="submit" className=" btn-primary" style={{ marginLeft: '90%' }}>رسالتنا </div>
                    <p className="contact" style={{ marginLeft: '62%' }}>
                        رسالتنا في تطبيق آمن هو أن يتحقق لنا مركز متقدم يتصف بالريادة في مجال الخدمات اللوجستية في المملكة العربية السعودية
                        ورسالتنا هي التعاون والاتقان في العمل وتقديم كل ما يميزنا واضعين نصب أعيننا دائماً أن يكون هدفنا الأسمى هو رضا العميل
                        دائماً ما نجتهد لنقدم أفضل خدمة وأفضل حل تقني ونضع في المرتبة الأولى رغبات العملاء
                        حيث يوجد لدينا ما يميزنا عن الآخرين . نحن هنا لنلبي خدمتكم على أكمل وجه

    </p>
                </div>
                <div>
                    <div type="submit" className=" btn-primary" style={{ marginLeft: '90%' }} >من أهدافنا </div>

                    <p className="contact" style={{ marginLeft: '62%' }}>

                        مواكبة العصر في مستوى الخدمات
                        التطوير الدائم
                        تطوير كوادر العمل والإدارة
                        الإرتقاء بمستوى الخدمة

    </p>
                </div>

                <img src={photo} style={{ width: '40%', hight: '20%', marginRight: '60%' }} />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>







        )
    }
}