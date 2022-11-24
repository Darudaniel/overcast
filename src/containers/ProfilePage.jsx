import '../styles/containers/ProfilePage.css'

const ProfilePage = () => {

  const playerName = "Bear"
  const playerHead = "https://i.pinimg.com/564x/dc/0d/6c/dc0d6c686fbe1f065aef0a399f6ecbc5--minecraft.jpg"
  const kd = 1.8
  const wools = 230
  const cores = 150
  const monuments = 340
  const kills = 1253
  const deaths = 520

  return (
    <div className="profile-page">
      <div className="player-head--container">
        <img src={playerHead} alt={`${playerName}'s head`} className="player-head" />
      </div>
      <div className='player-info'>
        <h2 className="player-name">{playerName}</h2>
        <h3 className="stat-title">{`KD: ${kd}`}</h3>
      </div>
      <div className='objetives-container'>
        <h3 className="stat-title">Objetives</h3>
        <h4 className="stat-subtitle">{`Wools: ${wools}`}</h4>
        <h4 className="stat-subtitle">{`Cores: ${cores}`}</h4>
        <h4 className="stat-subtitle">{`Monuments: ${monuments}`}</h4>
      </div>
      <div className='pvp'>
        <h3 className="stat-title">PVP</h3>
        <h4 className="stat-subtitle">{`Kills: ${kills}`}</h4>
        <h4 className="stat-subtitle">{`Deaths: ${deaths}`}</h4>
      </div>
    </div>
  )
}

export default ProfilePage