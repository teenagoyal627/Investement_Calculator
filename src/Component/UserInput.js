const UserInput = ({onChange,userInput}) => {

//state are in app.js and we directly import userInput state

  return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input
                value={userInput.initialInvestment}
                 type='number' 
                 required
                onChange={(event)=>onChange('initialInvestment',event.target.value)}
                 />
            </p>
            <p>
                <label>Annual Investment</label>
                <input
                value={userInput.annualInvestment}
                 type='number' 
                 required
                onChange={(event)=>onChange('annualInvestment',event.target.value)}
                 />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input
                value={userInput.expectedReturn}
                 type='number' 
                 required
                onChange={(event)=>onChange('expectedReturn',event.target.value)}
                 />
            </p>
            <p>
                <label>Duration</label>
                <input
                value={userInput.duration}
                 type='number' 
                 required
                onChange={(event)=>onChange('duration',event.target.value)}
                 />
            </p>
        </div>
    </section>
  )
}

export default UserInput
