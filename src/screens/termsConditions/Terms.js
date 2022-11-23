import React, { Component } from "react";
import FrontNav from "../../containers/DefaultLayout/FrontNav";
import FrontHeader from "../../components/FrontHeader/FrontHeader";
import DefaultFooter1 from '../../containers/DefaultLayout/DefaultFooter1';

const title ="Terms of Service";
const description = "Please read our terms of service";

class Terms extends Component {
    render() {
        return (
            <div>
                <FrontNav />
                <FrontHeader/>
            <div className="col-md-12">
                <h3>WELCOME TO SendThatCake!</h3>
                <h4>Last revision date: 29th August, 2020</h4>
                <h4>Our Terms of Service:</h4>
                <p>
                    SendThatCake: (“SendThatCake.com”, “we,” “us” and/or “our”)
                    provides its services (described below) to you(“clients”,
                    “customers”) through its website located at https://www.
                    sendthatcake.com (the “Site”) and through its mobile
                    platforms and related services (collectively, such services,
                    including any new features and applications, and the Site,
                    the “Service(s)”), subject to the following Terms of Service
                    (as amended from time to time, these “Terms of Service”). We
                    reserve the right, at our sole discretion, to change or
                    modify portions of these Terms of Service at any time. If we
                    do this, we will notify clients via email and post the
                    changes on this page and will indicate at the top of this
                    page the date these terms were last revised. We will also
                    notify you, either through the Services user interface, in
                    an email notification or through other reasonable means such
                    as text/sms should the phone addresses be available. Any
                    such changes will become effective no earlier than fourteen
                    (14) days after they are posted, except that changes
                    addressing new functions of the Services or changes made for
                    legal reasons will be effective immediately. Your continued
                    use of the Service after the date any such changes become
                    effective constitutes your acceptance of the new terms of
                    service. Furthermore, when using certain services, you will
                    be subject to any additional terms applicable to such
                    services that may be posted on the Service from time to
                    time, including, without limitation, the Privacy Policy
                    located at
                    https://sendthatcake.com/privacy-policy
                    . All such terms are hereby incorporated by reference into
                    these Terms of Service. Access and Use of the Service
                    Services Description: The Services enable searching,
                    reserving, and ordering cakes, cake accessories and gifts
                    through an ecommerce website. Your Registration Obligations:
                    You may be required to register with SendThatCake in order
                    to access and use certain features of the Service. If you
                    choose to register for the service, you agree to provide and
                    maintain true, accurate, current and complete information
                    about yourself or business as prompted by the Service’s
                    registration form. Registration data and certain other
                    information about you are governed by our Privacy Policy. If
                    you are under 16 years of age, you are not authorized to use
                    the Service, with or without registering. In addition, if
                    you are under 18 years old, you may use the Service, with or
                    without registering, only with the approval of your parent
                    or guardian. Member Account, Password and Security: You are
                    responsible for maintaining the confidentiality of your
                    password and account, if any, and are fully responsible for
                    any and all activities that occur under your password or
                    account. You agree to (a) immediately notify SendThatCake of
                    any unauthorized use of your password or account or any
                    other breach of security, and (b) ensure that you log out of
                    your account at the end of each session when accessing the
                    Service. SendThatCake will not be liable for any loss or
                    damage arising from your failure to comply with this
                    sSection. Modifications to Service: SendThatCake reserves
                    the right to modify or discontinue, temporarily or
                    permanently, the Service (or any part thereof) with or
                    without notice. You agree that SendThatCake will not be
                    liable to you or to any third party for any modification,
                    suspension or discontinuance of the Service. Mobile
                    Services: The Service includes certain services that are
                    available via a mobile device, including (i) the ability to
                    use the Service via a mobile device, (ii) the ability to
                    browse the Service and the Site from a mobile device and
                    (iii) the ability to access certain features through an
                    application downloaded and installed on a mobile device
                    (collectively, the “Mobile Services”). To the extent you
                    access the Mobile Services, your wireless service carrier’s
                    standard charges, data rates and other fees may apply. In
                    addition, downloading, installing, or using certain Mobile
                    Services may be prohibited or restricted by your carrier,
                    and not all Mobile Services may work with all carriers or
                    devices or in all areas. By using the Mobile Services, you
                    agree that we may communicate with you regarding
                    SendThatCake and other entities by SMS, MMS, Whatsapp or
                    other electronic means to your mobile device and that
                    certain information about your usage of the Mobile Services
                    may be communicated to us. In the event you change or
                    deactivate your mobile telephone number, you are responsible
                    for and agree to promptly update your SendThatCake account
                    information to ensure that your messages are not sent to the
                    person that acquires your old number.
                </p>
                <DefaultFooter1/>

            </div>
            </div>
        );
    }
}

export default Terms;
