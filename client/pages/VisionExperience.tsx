import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function VisionExperience() {
  const impacts = [
    {
      title: 'Confidence',
      description: 'Walk away with renewed confidence to trust your voice, ideas, and God-given gifts—equipped to move forward boldly.',
      icon: 'Users',
    },
    {
      title: 'Momentum',
      description: 'Learn how to plan, manage, and sustain impact student programs. Participants engage in strategic planning and leadership practices that align programs with student needs and organizational goals.',
      icon: 'Stack',
    },
    {
      title: 'Clarity',
      description: 'Gain a clear understanding of your purpose, goals, and next steps. The Vision Experience helps remove confusion and align your vision with intention.',
      icon: 'Users',
    },
    {
      title: 'Alignment',
      description: 'Reconnect your passions, values, and goals so your work and life move in harmony—not burnout.',
      icon: 'Users',
    },
  ];

  const reviews = [
    {
      quote: '"I enjoyed it so much. Doing my vision book allowed me to express my need for PEACE. However, at the same time the PEACE that I had been longing for is the PEACE I received while doing my vision book. I am at PEACE, and I am grateful for this vision to see the PEACE ahead of me."',
      stars: 5,
    },
    {
      quote: '"It Was Amazing. The Session Is Very Inspiring, And It Motivates You To Want To Be So Much Better In Life ."',
      stars: 5,
    },
    {
      quote: 'iJADE vision board experience gave me clarity and intention in a way I dint expect. Writing down goals for my spiritual growth, mental health, physical health, and saving money helped me slow down and truly reflect on what I need in the season of my life.',
      stars: 5,
    },
  ];

  const ImpactIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'Stack':
        return (
          <svg className="w-20 h-20 mb-6" viewBox="0 0 75 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M67.6494 44.3435C67.959 44.8163 68.0431 45.3777 67.8833 45.9049C67.7235 46.432 67.3328 46.882 66.7969 47.1563L38.6719 61.5938C38.3135 61.7777 37.9061 61.8746 37.4912 61.8746C37.0764 61.8746 36.6689 61.7777 36.3105 61.5938L8.18555 47.1563C7.65731 46.8769 7.27535 46.4258 7.12236 45.9004C6.96938 45.3751 7.05769 44.8178 7.36817 44.3493C7.67864 43.8809 8.1863 43.5389 8.78124 43.3974C9.37617 43.2559 10.0105 43.3263 10.5469 43.5933L37.5 57.425L64.4531 43.5933C64.9903 43.3209 65.6283 43.2469 66.2273 43.3875C66.8264 43.5281 67.3377 43.8719 67.6494 44.3435ZM64.4531 31.2183L37.5 45.05L10.5469 31.2183C10.0132 30.9845 9.39836 30.9384 8.82746 31.0895C8.25655 31.2405 7.77251 31.5773 7.47385 32.0313C7.17518 32.4854 7.08435 33.0225 7.21984 33.5334C7.35532 34.0442 7.70694 34.4905 8.20312 34.7813L36.3281 49.2188C36.6865 49.4027 37.0939 49.4996 37.5088 49.4996C37.9236 49.4996 38.3311 49.4027 38.6895 49.2188L66.8145 34.7813C67.0846 34.6468 67.3217 34.4664 67.512 34.2506C67.7022 34.0349 67.8419 33.788 67.9229 33.5243C68.0039 33.2606 68.0245 32.9854 67.9837 32.7147C67.9428 32.4439 67.8413 32.183 67.6849 31.9471C67.5286 31.7112 67.3205 31.5049 67.0728 31.3403C66.8252 31.1757 66.5428 31.056 66.2421 30.9882C65.9415 30.9204 65.6285 30.9059 65.3214 30.9454C65.0143 30.9848 64.7192 31.0776 64.4531 31.2183ZM7.03125 20.6248C7.03218 20.2635 7.14092 19.9089 7.34658 19.5962C7.55224 19.2836 7.84761 19.0239 8.20312 18.8433L36.3281 4.40581C36.6865 4.2219 37.0939 4.125 37.5088 4.125C37.9236 4.125 38.3311 4.2219 38.6895 4.40581L66.8145 18.8433C67.0846 18.6468 67.3217 18.4664 67.512 18.2506C67.7022 18.0349 67.8419 17.788 67.9229 17.5243C68.0039 17.2606 68.0245 16.9854 67.9837 16.7147C67.9428 16.4439 67.8413 16.183 67.6849 15.9471C67.5286 15.7112 67.3205 15.5049 67.0728 15.3403C66.8252 15.1757 66.5428 15.056 66.2421 14.9882C65.9415 14.9204 65.6285 14.9059 65.3214 14.9454C65.0143 14.9848 64.7192 15.0776 64.4531 15.2183L37.5 1.3875L10.5469 15.2183C10.0132 15.4845 9.39836 15.5384 8.82746 15.3895C8.25655 15.2405 7.77251 14.9773 7.47385 14.5313C7.17518 14.0854 7.08435 13.5225 7.21984 12.9834C7.35532 12.4442 7.70694 11.9905 8.20312 11.7313L36.3281 -2.7059C36.6865 -2.2219 37.0939 -2.375 37.5088 -2.375C37.9236 -2.375 38.3311 -2.2219 38.6895 -2.7059L66.8145 11.7313C67.3328 12.0207 67.7235 12.432 67.8833 12.9049C68.0431 13.3777 67.959 13.8163 67.6494 14.2935C67.3397 14.7706 66.8321 15.1096 66.2583 15.2512C65.6845 15.3927 65.0524 15.3224 64.5 15.0554L37.5 1.2937L10.5 15.0554C10.0476 15.3224 9.41547 15.3927 8.84167 15.2512C8.26787 15.1096 7.76027 14.7706 7.45056 14.2935C7.14086 13.8163 7.05675 13.3777 7.21651 12.9049C7.37627 12.432 7.76693 12.0207 8.28517 11.7313L36.3281 -2.7059C36.6865 -2.2219 37.0939 -2.375 37.5088 -2.375C37.9236 -2.375 38.3311 -2.2219 38.6895 -2.7059L66.8145 11.7313C67.3328 12.0207 67.7235 12.432 67.8833 12.9049C68.0431 13.3777 67.959 13.8163 67.6494 14.2935Z" fill="#3D2D44"/>
          </svg>
        );
      default:
        return (
          <svg className="w-20 h-20 mb-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.99 10C20.4187 10 17.5114 12.9339 17.5114 16.5203C17.5114 18.7892 18.6765 20.7925 20.4358 21.9602C18.3109 22.6706 16.4723 23.9985 15.1238 25.7357C14.3782 25.1622 13.5451 24.701 12.647 24.3705C14.0089 23.3595 14.8989 21.7353 14.8989 19.91C14.8989 16.8682 12.4388 14.3782 9.41547 14.3782C6.39215 14.3782 3.93208 16.8682 3.93208 19.91C3.93208 21.7364 4.82277 23.3613 6.18579 24.3723C2.57721 25.7039 0 29.1903 0 33.2933V36.1754C0.000369347 36.3951 0.0882567 36.6056 0.244089 36.7604C0.39992 36.9155 0.610779 37.0019 0.830496 37.0011H13.4755C13.5061 37.0045 13.5368 37.0063 13.5674 37.0059H34.4133C34.4439 37.0063 34.4749 37.0045 34.5052 37.0011H47.1511C47.6057 36.9993 47.9739 36.6304 47.975 36.1754V33.2933C47.975 29.1903 45.4022 25.7039 41.7955 24.3719C43.1585 23.3613 44.0492 21.736 44.0492 19.9096C44.0492 16.8679 41.5892 14.3778 38.5658 14.3778C35.5426 14.3778 33.0824 16.8679 33.0824 19.9096C33.0824 21.735 33.9728 23.3594 35.3346 24.3701C34.4347 24.7014 33.6013 25.1641 32.8546 25.739C31.5067 24.0008 29.6707 22.6711 27.5459 21.9602C29.3047 20.7925 30.4703 18.7892 30.4703 16.5203C30.4703 12.9339 27.5614 10 23.9902 10H23.99Z" fill="#3D2D44"/>
          </svg>
        );
    }
  };

  return (
    <Layout>
      {/* Hero Section with Jade Background */}
      <section className="bg-jade text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-inter">
                Create Your Vision, Achieve Your Dream!
              </h2>
              <p className="text-lg text-white mb-8 font-light leading-relaxed">
                Vision Experience Sessions is an interactive, guided session designed to help participants identify their dreams and goals with clarity and purpose. During each session, participants are guided in crafting effective affirmation statements and pairing them with constructive, meaningful imagery to support focus, confidence, and forward movement toward their goals.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/vision-experience-pricing"
                  className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-jade transition-colors"
                >
                  View Packages
                </Link>
                <Link
                  to="/vision-experience-form"
                  className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-jade transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3a5466c6131c6428b743ba614e50671656f836dd?width=776"
                alt="Vision Experience"
                className="w-full max-w-sm h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What iJADE Provides Section */}
      <section className="bg-jade text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What iJADE Provides</h2>

          <div className="grid md:grid-cols-4 gap-12">
            {/* In-person */}
            <div className="flex flex-col items-center text-center">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.2665 46.8819C38.4915 44.7628 40.9399 41.6756 42.2498 38.0768C43.5596 34.4779 43.6613 30.5586 42.5397 26.8984C41.4182 23.2381 39.1331 20.0313 36.0222 17.752C32.9113 15.4728 29.1398 14.2422 25.2655 14.2422C21.3913 14.2422 17.6198 15.4728 14.5089 17.752C11.398 20.0313 9.11287 23.2381 7.99135 26.8984C6.86983 30.5586 6.9715 34.4779 8.28132 38.0768C9.59115 41.6756 12.0396 44.7628 15.2646 46.8819C9.43089 49.0041 4.44879 52.9311 1.06168 58.0771C0.883663 58.3382 0.760014 58.6317 0.697917 58.9404C0.635821 59.2491 0.636516 59.5669 0.699962 59.8754C0.763409 60.1839 0.888341 60.4768 1.0675 60.7372C1.24665 60.9976 1.47646 61.2202 1.74356 61.3921C2.01065 61.5641 2.30972 61.6819 2.62336 61.7388C2.937 61.7957 3.25897 61.7904 3.57054 61.7234C3.88212 61.6564 4.17709 61.5289 4.4383 61.3483C4.69952 61.1678 4.92177 60.9378 5.09215 60.6718C7.27699 57.355 10.2667 54.6295 13.7896 52.7428C17.3126 50.856 21.2573 49.8677 25.2655 49.8677C29.2737 49.8677 33.2185 50.856 36.7414 52.7428C40.2644 54.6295 43.2541 57.355 45.4389 60.6718C45.7919 61.1895 46.337 61.5493 46.9566 61.6735C47.5762 61.7976 48.2204 61.6761 48.7499 61.3352C49.2795 60.9943 49.6518 60.4614 49.7864 59.8517C49.9211 59.242 49.8072 58.6046 49.4694 58.0771C46.0823 52.9311 41.1002 49.0041 35.2665 46.8819ZM12.0312 32.0619C12.0312 29.4784 12.8074 26.9529 14.2616 24.8048C15.7158 22.6567 17.7827 20.9824 20.201 19.9937C22.6192 19.0051 25.2802 18.7464 27.8474 19.2504C30.4147 19.7544 32.7728 20.9985 34.6237 22.8253C36.4745 24.6522 37.735 26.9797 38.2456 29.5135C38.7563 32.0474 38.4942 34.6739 37.4925 37.0607C36.4908 39.4476 34.7946 41.4877 32.6182 42.923C30.4418 44.3583 27.8831 45.1244 25.2655 45.1244C21.7568 45.1205 18.3929 43.743 15.9118 41.2942C13.4308 38.8453 12.0352 35.5251 12.0312 32.0619Z" fill="white"/>
              </svg>
              <h3 className="text-2xl font-semibold">In-person</h3>
            </div>

            {/* Online */}
            <div className="flex flex-col items-center text-center">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 100 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M98.3477 25.0938C97.8493 24.8587 97.2879 24.747 96.7231 24.7706C96.1583 24.7942 95.6114 24.9522 95.1406 25.2278L81.25 33.3609V24.75C81.25 23.2913 80.5915 21.8924 79.4194 20.8609C78.2473 19.8295 76.6576 19.25 75 19.25H12.5C10.8424 19.25 9.25268 19.8295 8.08058 20.8609C6.90848 21.8924 6.25 23.2913 6.25 24.75V63.25C6.25 64.7087 6.90848 66.1076 8.08058 67.1391C9.25268 68.1705 10.8424 68.75 12.5 68.75H75C76.6576 68.75 78.2473 68.1705 79.4194 67.1391C80.5915 66.1076 81.25 64.7087 81.25 63.25V54.6562L95.1406 62.8066C95.6566 63.1014 96.2599 63.2556 96.875 63.25C97.7038 63.25 98.4987 62.9603 99.0847 62.4445C99.6708 61.9288 100 61.2293 100 60.5V27.5C99.9961 27.0052 99.8405 26.5205 99.5497 26.097C99.2589 25.6735 98.8436 25.3269 98.3477 25.0938ZM75 63.25H12.5V24.75H75V63.25ZM93.75 55.3609L81.25 48.0288V39.9712L93.75 32.6562V55.3609Z" fill="white"/>
              </svg>
              <h3 className="text-2xl font-semibold">Online</h3>
            </div>

            {/* Vision Experience Sessions */}
            <div className="flex flex-col items-center text-center">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 75 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.6494 44.3435C67.959 44.8163 68.0431 45.3777 67.8833 45.9049C67.7235 46.432 67.3328 46.882 66.7969 47.1563L38.6719 61.5938C38.3135 61.7777 37.9061 61.8746 37.4912 61.8746C37.0764 61.8746 36.6689 61.7777 36.3105 61.5938L8.18555 47.1563C7.65731 46.8769 7.27535 46.4258 7.12236 45.9004C6.96938 45.3751 7.05769 44.8178 7.36817 44.3493C7.67864 43.8809 8.1863 43.5389 8.78124 43.3974C9.37617 43.2559 10.0105 43.3263 10.5469 43.5933L37.5 57.425L64.4531 43.5933C64.9903 43.3209 65.6283 43.2469 66.2273 43.3875C66.8264 43.5281 67.3377 43.8719 67.6494 44.3435ZM64.4531 31.2183L37.5 45.05L10.5469 31.2183C10.0132 30.9845 9.39836 30.9384 8.82746 31.0895C8.25655 31.2405 7.77251 31.5773 7.47385 32.0313C7.17518 32.4854 7.08435 33.0225 7.21984 33.5334C7.35532 34.0442 7.70694 34.4905 8.20312 34.7813L36.3281 49.2188C36.6865 49.4027 37.0939 49.4996 37.5088 49.4996C37.9236 49.4996 38.3311 49.4027 38.6895 49.2188L66.8145 34.7813C67.0846 34.6468 67.3217 34.4664 67.512 34.2506C67.7022 34.0349 67.8419 33.788 67.9229 33.5243C68.0039 33.2606 68.0245 32.9854 67.9837 32.7147C67.9428 32.4439 67.8413 32.183 67.6849 31.9471C67.5286 31.7112 67.3205 31.5049 67.0728 31.3403C66.8252 31.1757 66.5428 31.056 66.2421 30.9882C65.9415 30.9204 65.6285 30.9059 65.3214 30.9454C65.0143 30.9848 64.7192 31.0776 64.4531 31.2183ZM7.03125 20.6248C7.03218 20.2635 7.14092 19.9089 7.34658 19.5962C7.55224 19.2836 7.84761 19.0239 8.20312 18.8433L36.3281 4.40581C36.6865 4.2219 37.0939 4.125 37.5088 4.125C37.9236 4.125 38.3311 4.2219 38.6895 4.40581L66.8145 18.8433C67.0846 18.6468 67.3217 18.4664 67.512 18.2506C67.7022 18.0349 67.8419 17.788 67.9229 17.5243C68.0039 17.2606 68.0245 16.9854 67.9837 16.7147C67.9428 16.4439 67.8413 16.183 67.6849 15.9471C67.5286 15.7112 67.3205 15.5049 67.0728 15.3403C66.8252 15.1757 66.5428 15.056 66.2421 14.9882C65.9415 14.9204 65.6285 14.9059 65.3214 14.9454C65.0143 14.9848 64.7192 15.0776 64.4531 15.2183L37.5 1.3875L10.5469 15.2183C10.0132 15.4845 9.39836 15.5384 8.82746 15.3895C8.25655 15.2405 7.77251 14.9773 7.47385 14.5313C7.17518 14.0854 7.08435 13.5225 7.21984 12.9834C7.35532 12.4442 7.70694 11.9905 8.20312 11.7313L36.3281 -2.7059C36.6865 -2.2219 37.0939 -2.375 37.5088 -2.375C37.9236 -2.375 38.3311 -2.2219 38.6895 -2.7059L66.8145 11.7313C67.3328 12.0207 67.7235 12.432 67.8833 12.9049C68.0431 13.3777 67.959 13.8163 67.6494 14.2935Z" fill="white"/>
              </svg>
              <h3 className="text-2xl font-semibold">Vision Experience Sessions</h3>
            </div>

            {/* Guided reflection and affirmation */}
            <div className="flex flex-col items-center text-center">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.4622 30.3495L72.3875 15.9889C72.09 15.4603 71.6783 14.989 71.176 14.6019C70.6736 14.2148 70.0903 13.9194 69.4595 13.7327C68.8286 13.5459 68.1626 13.4715 67.4994 13.5135C66.8362 13.5556 66.1888 13.7134 65.5943 13.9779L57.7252 17.4739L41.1487 13.5757C40.7234 13.4774 40.2768 13.4774 39.8514 13.5757L23.2749 17.4739L15.4059 13.9779C14.8113 13.7134 14.1639 13.5556 13.5007 13.5135C12.8375 13.4715 12.1715 13.5459 11.5407 13.7327C10.9099 13.9194 10.3266 14.2148 9.8242 14.6019C9.3218 14.989 8.91012 15.4603 8.61265 15.9889L0.537966 30.3467C0.240405 30.8752 0.0628827 31.4506 0.0155372 32.0402C-0.0318083 32.6297 0.0519502 33.2217 0.262029 33.7824C0.472109 34.3432 0.804394 34.8616 1.23991 35.3082C1.67542 35.7548 2.20564 36.1207 2.80027 36.3851L11.3432 40.1848L28.9006 51.3307C29.1593 51.4944 29.4501 51.6136 29.7581 51.6823L50.0081 56.1823C50.4322 56.2768 50.8766 56.2721 51.298 56.1686C51.7194 56.0651 52.1035 55.8663 52.4128 55.5917L69.8373 40.1004L78.1967 36.3851C79.3968 35.8511 80.3092 34.9154 80.7335 33.7836C81.1577 32.6518 81.059 31.4166 80.459 30.3495H80.4622Z" fill="white"/>
              </svg>
              <h3 className="text-2xl font-semibold">Guided reflection and affirmation</h3>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-jade text-center mb-16">
            The Impact of the Vision Experience
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {impacts.map((impact) => (
              <div
                key={impact.title}
                className="bg-neutral-silver rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <ImpactIcon type={impact.icon} />
                <h3 className="text-2xl font-bold text-neutral-grey mb-4">{impact.title}</h3>
                <p className="text-sm text-neutral-grey font-light leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-16 text-center">Reviews</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 flex flex-col">
                <div className="flex justify-center mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">★</span>
                  ))}
                  {[...Array(5 - review.stars)].map((_, i) => (
                    <span key={`empty-${i}`} className="text-gray-300 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 font-light text-center flex-1 leading-relaxed">{review.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-black mb-8">
            Your Vision Matters. Book today!
          </h2>
          <Link
            to="/vision-experience-form"
            className="inline-block px-8 py-3 bg-jade text-white font-semibold rounded hover:opacity-90 transition-opacity"
          >
            Book Now
          </Link>
        </div>
      </section>
    </Layout>
  );
}
