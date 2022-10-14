import React, {Fragment, useState} from "react";
import Collapsible from "react-collapsible";
import questions from "../details/questions";
import "../../styles/css/modules/accordion.css"

const Accordion = () => {
  
  const [detail, setDetail] = useState(questions)

  return (
    <Fragment>
      <div className="container">
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
                  trigger = {[<i class="bi bi-chevron-down"></i>, detail.question]}
                  triggerWhenOpen = {[<i class="bi bi-chevron-up"></i>, detail.question]}>
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
      </div>
    </Fragment>
  )
}
 
export default Accordion;