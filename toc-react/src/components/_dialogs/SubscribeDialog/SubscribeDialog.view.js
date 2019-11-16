import React, { useState } from 'react';
import { Dialog, FormControl, Chip, TextField, Button } from '@material-ui/core';

import './SubscribeDialog.view.scss';

const SubscribeDialogView = () => {
  const [email, setEmail] = useState('');
  const [tags, setTags] = useState([]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleTags = (event) => {
    const tempTags = tags;
    tempTags.push(event.target.value);
    setTags(tempTags);
  }

  const handleDeleteTag = (event, item) => {
    // const index = this.state.what_will_learn.indexOf(item);
    // if (index > -1) {
    //   const whatWillLearns = this.state.what_will_learn;
    //   whatWillLearns.splice(index, 1);
    //   this.setState({ what_will_learn: whatWillLearns });
    // }
  }

  return (
    <div className="subscribe-view">
      <div className="header">
        <div>Subscribe us</div>
        <div className="header-title">You won't miss any sale off</div>
      </div>
      <div className="body">
        <div>
          <TextField margin="normal" onKeyDown={handleEmail} placeholder="Email" />
        </div>
        <div>
          <TextField margin="normal" onKeyDown={handleTags} placeholder="Topic" />
          <div>
            {
              tags.map((item, index) =>
                <div key={index}><Chip color="primary" label={item}
                  onDelete={(event) => handleDeleteTag(event, item)} /></div>)
            }
          </div>
        </div>
      </div>
      <div className="footer">
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default SubscribeDialogView;
