const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: "bi-shield-check",
      title: "IRDAI-Registered Insurance Marketing Firm",
      iconColor: "text-success"
    },
    {
      id: 2,
      icon: "bi-person-heart",
      title: "Personalized financial advice—no one-size-fits-all",
      iconColor: "text-primary"
    },
    {
      id: 3,
      icon: "bi-graph-up-arrow",
      title: "Mutual funds, NPS, and retirement products",
      iconColor: "text-info"
    },
    {
      id: 4,
      icon: "bi-headset",
      title: "End-to-end claim support and documentation help",
      iconColor: "text-warning"
    },
    {
      id: 5,
      icon: "bi-bullseye",
      title: "Goal-based investment planning",
      iconColor: "text-danger"
    },
    {
      id: 6,
      icon: "bi-transparency",
      title: "Transparent, research-backed recommendations",
      iconColor: "text-purple"
    }
  ];

  return (
    <section className="why-choose-section pt-50 mt-50 py-80 pb-50 lg-py-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-60 lg-mb-40">
              <h2 className="section-heading fw-bold tx-dark mb-20">
                Why Choose Us?
              </h2>
              <p className="section-tagline fs-18 fw-500 text-muted mb-0">
                Backed by data, powered by care.
              </p>
            </div>
          </div>
        </div>

        <div className="row gx-4 gy-4">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="col-lg-4 col-md-6 col-sm-6">
              <div className="benefit-card h-100 p-4 text-center">
                <div className="benefit-icon-wrapper mb-3">
                  <div className={`benefit-icon rounded-circle mx-auto d-flex align-items-center justify-content-center ${benefit.iconColor}`}>
                    <i className={`${benefit.icon} fs-24`}></i>
                  </div>
                </div>
                <h6 className="benefit-title fw-600 tx-dark mb-0 lh-base">
                  {benefit.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;