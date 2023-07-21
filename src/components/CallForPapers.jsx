import Link from 'next/link'

import { Container } from '@/components/Container'

export function CallForPapers({ id }) {
  return (
    <section id={id} aria-label="CallForPapers" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
          Call for Participation
        </h2>

        <div className="mx-auto mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Submit your presentation
          </h3>
          <p>
            Whether you`re new to OSM or an experienced contributor, we want to
            hear from you. Submit your session proposal today and share your
            mapping or technical expertise, discuss OpenStreetMap or related
            topics.
          </p>
          <p>
            We especially encourage local and regional mappers to participate.
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Who should propose a session? You!
          </h3>
          <p>
            Whether you`re a seasoned speaker or a first-time proposer, we
            welcome your ideas. Share your expertise, lead a workshop or dive
            deep into OpenStreetMap-related discussions. State of the Map Europe
            is a platform where all voices are valued.
          </p>
          <p>
            Grab this opportunity, contribute to an inspiring and collaborative
            conference and take the stages at State of the Map Europe 2023.
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Session Types
          </h3>
          <p>
            We would love to see your submission for one or more of these
            tracks:
            <ul>
              <li>OSM Basics</li>
              <li>Community and Foundation</li>
              <li>Mapping</li>
              <li>Cartography</li>
              <li>Software Development</li>
              <li>Data Analysis & Data Model</li>
              <li>User Experiences</li>
              <li>
                <strong>anything</strong> else OSM related
              </li>
            </ul>
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Submission Types
          </h3>
          <p>
            You may choose for most submission types whether you attend in
            person or participate virtually. We will try to make all events
            available for online and offline attendance. Exceptions are noted
            below. Please keep in mind that the conference will take place in
            the CEST timezone. We will try to take into account the timezone of
            participants as much as possible when scheduling events but we will
            be restricted to the usual conference hours between 9am and 6pm.
          </p>
          <p>
            <strong>Talk (20 minutes)</strong>
          </p>
          <p>
            Classic talk of about 20 minutes for the talk itself followed by a
            question and answer session. This is the preferred submission type.
            Talks can either be held in-person at the conference or, if you
            cannot attend, you may submit a pre-recorded talk. The QA part of
            the talk is always live. Virtual speakers will join via video call.
            That means that even with a pre-recorded video you need to be
            available.
          </p>
          <p>Extended Talk (40 minutes)</p>
          <p>
            An extended talk with 40 minutes for the talk and 15 minutes for
            questions. These are for topics you want to explore in more depth.
            The same rules as for classic talks apply. You should outline why
            your talk deserves more time.
          </p>
          <p>
            <strong>Workshop (60–90 minutes)</strong>
          </p>
          <p>
            Workshops are sessions in which the participants are actively
            involved, for example by following some steps on their own devices.
            We welcome workshops that cover basic beginners’s topics as well as
            innovative technologies.
          </p>
          <p>
            Please communicate any requirements for participants in order to
            attend your proposed workshop regarding technical equipment. Please
            ensure that your participants shouldn’t be told to create an account
            at a business platform or a platform with user tracking. Or if so
            communicate that in an exposed way in your submission and provide
            guest accounts for your participants.
          </p>
          <p>
            Workshops will be held either in-person or virtually, not with a
            mixed audience. If you want to offer the workshop for both
            audiences, you are welcome to hold it twice. For virtual workshops,
            we will provide video conference rooms. Online workshops will have a
            limited number of places to ensure a successful session.
          </p>
          <p>
            <strong>Panel Discussion (60-90 minutes)</strong>
          </p>
          <p>
            Panels are for hot, controversial discussions around OSM community,
            mapping and data. Topics may cover for example diversity, legal
            questions or the future of the database. You should outline the
            format on how you intend to organise the discussion and make sure to
            invite the key players for the discussion. Panel participants can
            either all join in-person or all virtually via video call. We
            welcome panels that include the audience. Just keep in mind that
            questions come from virtual and in-person participants. A designated
            moderator is therefore strongly recommended.
          </p>
          <p>
            <strong>Other</strong>
          </p>
          <p>
            Your submission does not fit into any of these submission types?
            Please get in touch with the programme committee via email
            (program-sotm@openstreetmap.org) before the end of the call for
            participation.
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Other session types
          </h3>
          <p>
            We plan to provide space for other session types which cannot be
            submitted in advance. Details will be announced before the
            conference.
          </p>
          <p>
            <strong>Lightning Talk</strong>
          </p>
          <p>
            Lightning talks will be short 5 minute talks. There will be some
            spaces for last-minute in-person talks as well as spaces for
            pre-recorded videos. This will be announced separately.
          </p>
          <p>
            <strong>Birds of a Feather</strong>
          </p>
          <p>
            Birds of a Feather (BoF) sessions are informal, spontaneous
            discussion rounds centered around a specific topic. It is not
            possible to submit a BoF session in advance. BoFs will usually be
            held in person only.
          </p>
          <p>
            <strong>Free Spaces</strong>
          </p>
          <p>
            We will provide free spaces for working groups, local chapters,
            local groups, user groups for chitchat and more.
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Rating Criteria
          </h3>
          <p>
            In rating submissions, we will apply the following criteria: OSM as
            the subject: A submission where OSM is the main subject or an
            important ingredient will be rated higher than one that is more
            generic (e.g. a general talk about GIS software). Preference of
            “open”: A submission about open data and open source software will
            be preferred over one that deals with proprietary data or
            proprietary software and closed platforms. Preference of innovation:
            A submission about something new, or something not discussed at
            previous conferences, will be preferred over one that discusses more
            widely known issues (exception: OSM Basics). We are hoping for talks
            from a multitude of speakers and hence we would prefer accepting a
            talk from a „new“ speaker over accepting a second talk from someone
            who has already an accepted talk. We will also try to avoid
            accepting too many talks from members of the same organisation. We
            prefer talks from members of underrepresented groups. We value
            transparency. We prefer submissions that disclose affiliations and
            sponsors of their work. Sometimes we will make some changes or have
            suggestions: We might ask if several speakers can merge their talks.
            We might also ask if a change of format would be possible (for
            example we might suggest the lightning talk format instead of a
            regular talk when we find it is not enough content for a complete
            talk, but an interesting subject).
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Language
          </h3>
          <p>
            {' '}
            The conference language of State of the Map is English. All
            presentations shall be held in English. It is an important aspect of
            the conference that participants can interact with the speakers for
            questions and discussions. Non-English speaking participants are
            welcome to meet in the Birds of a Feather sessions.
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Publication
          </h3>
          <p>
            Video recordings and slides of the lectures will be published under
            the Creative Commons Attribution International 3.0 or later (CC BY
            3.0+) license.
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Tickets
          </h3>
          <p>
            State of the Map is a non-commercial event where neither the
            organisers nor the speakers are being paid. Speakers have to get a
            conference ticket just like everyone else. Details will be announced
            later.
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Programme Committee
          </h3>
          <p>
            Your submissions will be reviewed by a programme committee
            consisting of OpenStreetMap community members from various parts of
            the world. (To be announced) The programme committee is aware of
            possible conflict of interest situations. We try to balance that in
            the composition of the committee. Nevertheless, we have imposed some
            rules upon ourselves to handle conflict of interest situations: We
            do not rate submissions from our workmates, clients or relatives. We
            act carefully and are aware about possible conflicts (especially the
            situation of horse trading). We act particularly carefully in cases
            associated to a sponsor. We communicate to other Programme Committee
            members when we are in a conflict of interest situation. We report
            any outside attempt of influencing their decisions to the chair of
            the SotM Working Group. We hope this detailed “Call for
            Presentations” helps to increase the transparency of our programme
            selection process. Questions are welcome. You can reach us at the
            following email address: program-sotm@openstreetmap.org.
          </p>
          <h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
            Timeline & Deadlines
          </h3>
          <p>
            <ul>
              <li>July 14: Call for Proposals Opens</li>
              <li>August 24: Deadline for submissions</li>
              <li>September 21: Speakers notified of final decision</li>
              <li>October 4: Program Announced</li>
              <li>November 10-12: State of the Map Europe 2023</li>
            </ul>
          </p>
          <p>
            <Link
              className="font-bold"
              target="_blank"
              href="https://pretalx.com/state-of-the-map-europe-2023/cfp"
            >
              Submit your presentation!
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}
