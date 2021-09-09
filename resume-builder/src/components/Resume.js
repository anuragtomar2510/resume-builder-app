import React, {useState} from 'react'
import Profile from './Profile'
import Education from './Education'
import Projects from './Projects'
import Experience from './Experience'
import Extras from './Extras'
import Success from './Success'

// Create Context
export const resumeContext = React.createContext()

const Resume = () => {

        const [step, setStep] = useState(1)
        
        // Personal Profile Information...

        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [email, setEmail] = useState('')
        const [phone, setPhone] = useState('')
        const [website, setWebsite] = useState('')
        const [github, setGithub] = useState('')
        const [linkedin, setLinkedin] = useState('')
        const [twitter, setTwitter] = useState('')
        const [facebook, setFacebook] = useState('')
        const [instagram, setInstagram] = useState('')


        // Education Information...

        const [college, setCollege] = useState('')
        const [fromYear1, setFromYear1] = useState('')
        const [toYear1, setToYear1] = useState('')
        const [qualification1, setQualification1] = useState('')
        const [description1, setDescription1] = useState('')
        const [school, setSchool] = useState('')
        const [fromYear2, setFromYear2] = useState('')
        const [toYear2, setToYear2] = useState('')
        const [qualification2, setQualification2] = useState('')
        const [description2, setDescription2] = useState('')



        // Project Information...

        const [title1, setTitle1] = useState('')
        const [link1, setLink1] = useState('')
        const [projectDescription1, setProjectDescription1] = useState('')
        const [title2, setTitle2] = useState('')
        const [link2, setLink2] = useState('')
        const [projectDescription2, setProjectDescription2] = useState('')
        const [title3, setTitle3] = useState('')
        const [link3, setLink3] = useState('')
        const [projectDescription3, setProjectDescription3] = useState('')


        // Experience Information...

        const [institute1, setInstitute1] = useState('')
        const [position1, setPosition1] = useState('')
        const [duration1, setDuration1] = useState('')
        const [experienceDescription1, setExperienceDescription1] = useState('')
        const [institute2, setInstitute2] = useState('')
        const [position2, setPosition2] = useState('')
        const [duration2, setDuration2] = useState('')
        const [experienceDescription2, setExperienceDescription2] = useState('')


        // Extras Information...

        const [skill1, setSkill1] = useState('')
        const [skill2, setSkill2] = useState('')
        const [skill3, setSkill3] = useState('')
        const [skill4, setSkill4] = useState('')
        const [skill5, setSkill5] = useState('')
        const [skill6, setSkill6] = useState('')
        const [interest1, setInterest1] = useState('')
        const [interest2, setInterest2] = useState('')
        const [interest3, setInterest3] = useState('')
        const [interest4, setInterest4] = useState('')
        const [interest5, setInterest5] = useState('')
        const [interest6, setInterest6] = useState('')

        const nextStep = () => {

                setStep(step + 1)

        }

        const prevStep = () => {

                setStep(step - 1)

        }

        return (

                <>
                        <resumeContext.Provider
                              value={{
                                        firstName, 
                                        setFirstName,
                                        lastName, 
                                        setLastName,
                                        email, 
                                        setEmail,
                                        phone,
                                        setPhone,
                                        github, 
                                        setGithub,
                                        website,
                                        setWebsite,
                                        twitter, 
                                        setTwitter,
                                        linkedin, 
                                        setLinkedin,
                                        facebook,
                                        setFacebook,
                                        instagram,
                                        setInstagram,
                                        college, 
                                        setCollege,
                                        fromYear1, 
                                        setFromYear1,
                                        toYear1, 
                                        setToYear1,
                                        qualification1, 
                                        setQualification1,
                                        description1, 
                                        setDescription1,
                                        school, 
                                        setSchool,
                                        fromYear2, 
                                        setFromYear2,
                                        toYear2, 
                                        setToYear2,
                                        qualification2, 
                                        setQualification2,
                                        description2, 
                                        setDescription2,
                                        title1, 
                                        setTitle1,
                                        link1, 
                                        setLink1,
                                        projectDescription1, 
                                        setProjectDescription1,
                                        title2, 
                                        setTitle2,
                                        link2, 
                                        setLink2,
                                        projectDescription2, 
                                        setProjectDescription2,
                                        title3, 
                                        setTitle3,
                                        link3, 
                                        setLink3,
                                        projectDescription3, 
                                        setProjectDescription3,
                                        institute1, 
                                        setInstitute1,
                                        position1, 
                                        setPosition1,
                                        duration1, 
                                        setDuration1,
                                        experienceDescription1, 
                                        setExperienceDescription1,
                                        institute2, 
                                        setInstitute2,
                                        position2, 
                                        setPosition2,
                                        duration2, 
                                        setDuration2,
                                        experienceDescription2, 
                                        setExperienceDescription2,
                                        skill1, 
                                        setSkill1,
                                        skill2, 
                                        setSkill2,
                                        skill3, 
                                        setSkill3,
                                        skill4, 
                                        setSkill4,
                                        skill5, 
                                        setSkill5,
                                        skill6, 
                                        setSkill6,
                                        interest1, 
                                        setInterest1,
                                        interest2, 
                                        setInterest2,
                                        interest3, 
                                        setInterest3,
                                        interest4, 
                                        setInterest4,
                                        interest5, 
                                        setInterest5,
                                        interest6, 
                                        setInterest6,
                                        prevStep,
                                        nextStep

                              }} 
                        >
                        
                        <div className="App mt-3">
                                <div className="container col-lg-10 mx-auto text-center">
                                         {step === 1 && (<Profile />)}
                                         {step === 2 && (<Education />)}
                                         {step === 3 && (<Projects />)}
                                         {step === 4 && (<Experience />)}
                                         {step === 5 && (<Extras />)}
                                         {step === 6 && (<Success />)}
                                </div>
                        </div>

                        </resumeContext.Provider>

                        
                </>
        )


        
}

export default Resume
