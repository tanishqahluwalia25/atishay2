import useWindowWidth from "react-hook-use-window-width";

const CourseCard = () => {
  const width = useWindowWidth();

  if (width < 830) {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center my-3 bg-">
          <span className="mx-auto">
            <div
              className="course-card3 d-flex flex-column"
              style={{ height: "40rem" }}
            >
              <div className="course-card-title">
                <p className="display-5 title">
                  Linkedin <br />
                  Masterclass
                </p>
                <br />
                <p className="detail">
                  An intensive course on unleashing your personal brand on the
                  world's most sought after professional - LinkedIn where you
                  can Kill It on LinkedIn with our simple, easy-to-adapt and
                  proven framework.
                  <br />
                  <a
                    href="https://www.atishayjain.in/courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-link"
                  >
                    learn more
                  </a>
                </p>
              </div>
              <div className="course-card-float">
                <div className="course-card-details">
                  <p className="h6 ">Accelerate Your Profile</p>
                  <p className="text-secondary mb-2 text-light">
                    Rise & Shine with impactful & relevant changes to your
                    profile.
                  </p>
                  <p className="h6 ">Build Connections</p>
                  <p className="text-secondary mb-2 text-light">
                    Grow your network & build bonds with undeniable & sharp
                    invites.
                  </p>
                  <p className="h6 ">Create Content Consistently</p>
                  <p className="text-secondary mb-2 text-light">
                    Create crisp & meaningful content that builds traction.
                  </p>
                  <p className="h6 ">Discover Right Tools</p>
                  <p className="text-secondary mb-2 text-light">
                    Uncover tips & tricks to enhance your growth.
                  </p>
                </div>
              </div>
            </div>
          </span>
        </div>
      </>
    );
  }
  return (
    <div className="d-flex align-items-center justify-content-center my-3 bg-">
      <span className="mx-auto" style={{ width: "30rem" }}>
        <div className="course-card2 d-flex">
          <div className="course-card-title">
            <p className="display-5 title">
              Linkedin <br />
              Masterclass
            </p>
            <br />
            <p className="detail">
              An intensive course on unleashing your personal brand on the
              world's most sought after professional - LinkedIn where you can
              Kill It on LinkedIn with our simple, easy-to-adapt and proven
              framework.
              <br />
              <a
                href="https://www.atishayjain.in/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="course-link"
              >
                learn more
              </a>
            </p>
          </div>

          <div className="course-card-float">
            <div className="course-card-details">
              <p className="h6 ">Accelerate Your Profile</p>
              <p className="text-secondary mb-1 text-light">
                Rise & Shine with impactful & relevant changes to your profile.
              </p>
              <p className="h6 ">Build Connections</p>
              <p className="text-secondary mb-1 text-light">
                Grow your network & build bonds with undeniable & sharp invites.
              </p>
              <p className="h6 ">Create Content Consistently</p>
              <p className="text-secondary mb-1 text-light">
                Create crisp & meaningful content that builds traction.
              </p>
              <p className="h6 ">Discover Right Tools</p>
              <p className="text-secondary mb-1 text-light">
                Uncover tips & tricks to enhance your growth.
              </p>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default CourseCard;
