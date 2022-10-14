import React, {Fragment, useState} from "react";
import Collapsible from "react-collapsible";
import questions from "../details/questions";

const Accordion = () => {
  
  const [detail, setDetail] = useState(questions)
  return (
    <Fragment>
      <section className="accordion">
        <div className="accordion-row">
          <div className="left">
            <h3>Preguntas Frecuentes</h3>
            {
              detail.map((detail)=> {
                return(
                <div className="left-content">
                <Collapsible 
                  className="Collapsible"
                  trigger = {[<i class="bi bi-caret-down"></i>, detail.question]}
                  triggerWhenOpen = {[<i class="bi bi-caret-up"></i>, detail.question]}>
                    <p className="content-show">
                      {detail.answer}
                    </p>
                </Collapsible>
                </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </Fragment>
  )
}
 
export default Accordion;