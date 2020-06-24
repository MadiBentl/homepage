import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideModal } from '.././reducers/settings'

const SettingsModal = () => {
  const dispatch = useDispatch()
  const visible = useSelector(state => state.settings.visible)

  return(
    <div id='settings-modal' className={`ui modal ${visible ? 'active' : ''}`}>
      <div className='content'>
        <div className='settings-text'>
          <h2>Meet your new dashboard</h2>
          <p>Haro was born to wed a command-line interface with near unlimited customizability.
          If you&apos;re new to Haro, we suggest checking out our in-browser Haro Tutorial</p>
        </div>
        <h2>Settings</h2>
        <div className='ui list'>
          <div className='item'>
            <div className="ui toggle checkbox">
              <input type="checkbox" name="public" defaultChecked />
              <label>Randomize background (daily)</label>
            </div>
          </div>
          <div className='item'>
            <div className="ui toggle checkbox ">
              <input type="checkbox" name="public" defaultChecked/>
              <label>Enable hints on hover</label>
            </div>
          </div>
          <div className='item'>
            <div className="ui toggle checkbox">
              <input type="checkbox" name="public" />
              <label>Enable Dark Mode</label>
            </div>
          </div>
          <div className='item'>
            <div className="ui toggle checkbox ">
              <input type="checkbox" name="public" />
              <label>Remove autocomplete on Command Line</label>
            </div>
          </div>
          <div className='item'>
            <div className="ui toggle checkbox disabled">
              <input type="checkbox" name="public" />
              <label>Save your dashboard (requires log in)</label>
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="ui approve button">Save</div>
        <div className="ui cancel button" onClick={() => dispatch(hideModal())}>Cancel</div>
      </div>
    </div>
  )
}

export default SettingsModal
