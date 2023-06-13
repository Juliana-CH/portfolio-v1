import * as React from 'react';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./timeline.scss";

const useStyles = makeStyles({
    myCustomClass: {
        
    },
  });
 

export default function OppositeContentTimeline() {
    const { t } = useTranslation();
    const classes = useStyles();


    return (

    <>
    <section id="timeline">

        <div className="title-container">
            <h2 className="titles-first-word">Time<span className="titles-second-word">line</span></h2>
        </div>

    
      <Timeline position="alternate">

        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2007
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <strong>{t("timeline.timel.ts1")}</strong>{t("timeline.timel.ts2")}
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">{t("timeline.timel.ts3")}</h2>
                <h2 className="timeline-skills-item">{t("timeline.timel.ts4")}</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2009
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            {t("timeline.timel.ts5")}<strong>{t("timeline.timel.ts6")}</strong>{t("timeline.timel.ts7")}
            
            <div className="timeline-skills-opposite">
                <h2 className="timeline-skills-item">{t("timeline.timel.ts8")}</h2>
                <h2 className="timeline-skills-item">Microsoft CRM</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2010
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>{t("timeline.timel.ts9")}</strong>{t("timeline.timel.ts10")} </p>
            <p><strong>{t("timeline.timel.ts11")}</strong> {t("timeline.timel.ts12")}</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">{t("timeline.timel.ts13")}</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2011
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>{t("timeline.timel.ts14")}</strong> - {t("timeline.timel.ts15")}</p>
            <p><strong>{t("timeline.timel.ts16")}</strong> {t("timeline.timel.ts16a")}</p>
            <p>{t("timeline.timel.ts17")}</p>
            <div className="timeline-skills-opposite">
                <h2 className="timeline-skills-item">KPI's</h2>
                <h2 className="timeline-skills-item">{t("timeline.timel.ts18")}</h2>
                <h2 className="timeline-skills-item">{t("timeline.timel.ts19")}</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2012
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>{t("timeline.timel.ts20")}</strong> João. 
            <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
            </p>
            <p><strong>{t("timeline.timel.ts21")}</strong> {t("timeline.timel.ts22")}</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">{t("timeline.timel.ts23")}</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2013
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            {t("timeline.timel.ts24")}<strong>{t("timeline.timel.ts25")}</strong>{t("timeline.timel.ts26")}
            <div className="timeline-skills-opposite">
                <h2 className="timeline-skills-item">{t("timeline.timel.ts27")}</h2>
                <h2 className="timeline-skills-item">{t("timeline.timel.ts28")}</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2014
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p>{t("timeline.timel.ts29")}</p>
            <p><strong>{t("timeline.timel.ts30")}</strong>, Maria Antônia.
            <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
            </p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">{t("timeline.timel.ts31")}</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2015/16
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p>{t("timeline.timel.ts32")}<strong>{t("timeline.timel.ts33")}</strong> {t("timeline.timel.ts34")} <a href= "naosaogemeos.com.br" target='blank'>Não São Gêmeos.</a></p>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2017
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p>{t("timeline.timel.ts35")}</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">{t("timeline.timel.ts36")}</h2>
            </div>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2018
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>{t("timeline.timel.ts37")}</strong>, Romeo.
            <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
            </p>
            <p>{t("timeline.timel.ts38")}</p>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2019/ 20/ 21
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p>{t("timeline.timel.ts39")}</p>
            <p>{t("timeline.timel.ts40")}</p>
            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2022
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>{t("timeline.timel.ts41")}</strong> {t("timeline.timel.ts42")}<strong>{t("timeline.timel.ts43")}</strong>
            , <strong>{t("timeline.timel.ts44")}</strong>{t("timeline.timel.ts45")} </p>
            <p>{t("timeline.timel.ts46")}<strong>{t("timeline.timel.ts47")}</strong>{t("timeline.timel.ts48")}</p>
            <div className="timeline-skills-opposite">
                <div className="timeline-skills-item-2022">
                    <h2 className="timeline-skills-item">{t("timeline.timel.ts49")}</h2>
                    <h2 className="timeline-skills-item">Figma</h2>
                    <h2 className="timeline-skills-item">CSS/ SASS</h2>
                    <h2 className="timeline-skills-item">HTML</h2>
                    <h2 className="timeline-skills-item">GitHub</h2>
                    <h2 className="timeline-skills-item">JavaScript</h2>
                </div>
            </div>

            </TimelineContent>
        </TimelineItem>


        <TimelineItem className="timeline-item">
          <TimelineOppositeContent className="timeline-year">
            2023
          </TimelineOppositeContent>

          <TimelineSeparator className="timeline-item-separator">

            <TimelineDot className="timeline-item-dot"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-item-text">
            <p><strong>{t("timeline.timel.ts50")}</strong>{t("timeline.timel.ts51")}.</p>
            <p><strong>{t("timeline.timel.ts52")}</strong>{t("timeline.timel.ts53")}</p>
            <div className="timeline-skills">
                <h2 className="timeline-skills-item">React</h2>
                <h2 className="timeline-skills-item">Next JS</h2>
            </div>
            </TimelineContent>
        </TimelineItem>

        
      </Timeline>

    </section>
    </>
    );
  };