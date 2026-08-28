import Pattern from "./Pattern";
import patternTop from "../assets/images/pattern-squiggly-line-top.svg";
import patternBottom from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternLine from "../assets/images/pattern-lines.svg";
import patternCircle from "../assets/images/pattern-circle.svg";
import ticket from "../assets/images/pattern-ticket.svg";
import logo from "../assets/images/logo-full.svg";

import git from "../assets/images/icon-github.svg";
import "../styles/DesignForm.css";
import "../styles/DesignTicket.css";
import logoMark from "../assets/images/logo-mark.svg";

const date = new Date();

const formattedDate = date.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const ticketId = ['#', 0, 1, 9, 0, 6];

console.log(formattedDate);
function DesignTicket({ fileName, formData }) {
  return (
    <section className="hero">
      <div className="hero__decor">
        <Pattern lineTop="pattern-line" pattern={patternLine} />
        <Pattern top="squiggle--top-right" pattern={patternTop} />
        <Pattern bottom="squiggle--bottom-left" pattern={patternBottom} />
        <Pattern circle="circle" pattern={patternCircle} />
      </div>

      <div className="hero__content">
        <header>
          <img src={logo} />
        </header>
        <div className="form-submit form-gathered">
          <h1>
            Congrats, <span>{formData.fullName.toUpperCase()}</span>! <br />
            Your ticket is ready
          </h1>
          <p>
            We've emailed your ticket to
            <br />
            <span>{formData.email}</span> and will send updates in
            <br /> the run to the event.
          </p>
        </div>

        <div className="ticket-tag">
          <img className="ticket-template" src={ticket} />
          <TicketTag tag="logo" />
          <TicketTag
            tag="user"
            fileName={fileName}
            formData={formData}
            git={git}
          />
          <div className="ticket-id">
          {ticketId.map(ticket => (
            <span key={ticket}>{ticket}</span>
          ))}
            {/* <span>#</span>
            <span>0</span>
            <span>1</span>
            <span>9</span>
            <span>0</span>
            <span>6</span> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function TicketTag({ tag, fileName, formData, git }) {
  return (
    <div
      className={`section ${
        tag === "logo" ? "top-section" : tag === "user" ? "bottom-section" : ""
      }`}
    >
      {(tag === "logo" && <img className="logo-mark" src={logoMark} />) ||
        (tag === "user" && <img className="ticket-thumbnail" src={fileName} />)}
      <div className="time-address">
        {(tag === "logo" && <span>Coding Conf</span>) ||
          (tag === "user" && <span>{formData.fullName}</span>)}
        {(tag === "logo" && (
          <span className="date">{formattedDate} / Ikorodu, Lagos</span>
        )) ||
          (tag === "user" && (
            <div className="social">
              <img src={git} />
              <span>@{formData.email}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DesignTicket;
