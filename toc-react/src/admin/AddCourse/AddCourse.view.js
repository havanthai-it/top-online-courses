import React from 'react';
import {
  FormControl, TextField, Select, InputLabel, MenuItem, ListItemText, Checkbox, TextareaAutosize,
  Chip, Button
} from '@material-ui/core';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import CategoryService from './../../services/category.service';
import PlatformService from './../../services/platform.service';
import CourseService from './../../services/course.service';
import { categoryArrayToTagArray } from './../../utils/funcUtils';

import './AddCourse.view.scss';

class AddCourseView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listPlatforms: [],
      listTags: [],

      // data
      name: '',
      image_url: '',
      description: '',
      tags: [],
      what_will_learn: [],
      n_lectures: '',
      n_hours: '',
      rate: '',
      level: '',
      has_certificate: '',
      price: '',
      author: '',
      platform: '',
      url: ''
    };
  }

  componentWillMount() {
    PlatformService.getMany().then((res) => {
      this.setState({ listPlatforms: res.data });
    });

    CategoryService.getMany().then((res) => {
      this.setState({ listTags: categoryArrayToTagArray(res.data) });
    })
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleImageUrl(event) {
    this.setState({ image_url: event.target.value });
  }

  handleDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleTagSelect(event) {
    this.setState({ tags: event.target.value });
  }

  handlePlatformSelect(event) {
    this.setState({ platform: event.target.value });
  }

  handleAddWhatWillLearn(event) {
    if (event.keyCode === 13 && event.target.value) {
      const whatWillLearns = this.state.what_will_learn;
      whatWillLearns.push(event.target.value);
      this.setState({ what_will_learn: whatWillLearns });
      event.target.value = '';
    }
  }

  handleDeleteWhatWillLearn(event, item) {
    const index = this.state.what_will_learn.indexOf(item);
    if (index > -1) {
      const whatWillLearns = this.state.what_will_learn;
      whatWillLearns.splice(index, 1);
      this.setState({ what_will_learn: whatWillLearns });
    }
  }

  handleNLectures(event) {
    this.setState({ n_lectures: event.target.value });
  }

  handleNHours(event) {
    this.setState({ n_hours: event.target.value });
  }

  handleRate(event) {
    this.setState({ rate: event.target.value });
  }

  handleLevelSelect(event) {
    this.setState({ level: event.target.value });
  }

  handleHasCertificateSelect(event) {
    this.setState({ has_certificate: event.target.value });
  }

  handlePrice(event) {
    this.setState({ price: event.target.value });
  }

  handleAuthor(event) {
    this.setState({ author: event.target.value });
  }

  handleUrl(event) {
    this.setState({ url: event.target.value });
  }

  submit() {
    const courseDetails = {
      n_lectures: this.state.n_lectures,
      n_hours: this.state.n_hours,
      rate: this.state.rate,
      level: this.state.level,
      has_certificate: this.state.has_certificate,
      price: this.state.price,
      platform: this.state.platform,
      author: this.state.author,
      url: this.state.url,
    };
    const course = {
      name: this.state.name,
      image_url: this.state.image_url,
      description: this.state.description,
      what_will_learn: this.state.what_will_learn,
      tags: this.state.tags,
      details: courseDetails,
      review: '',
    };

    CourseService.add(course).then((res) => {
      alert('Add couse successfully!');
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="add-course-view">
        <form>
          <h1 className="g-text-center">ADD COURSE</h1>
          <div>
            <h2>Basic information:</h2>
            <FormControl>
              <div>Name:</div>
              <TextField margin="normal" onChange={(event) => this.handleName(event)} />
            </FormControl>
            <FormControl>
              <div>Image URL:</div>
              <TextField margin="normal" onChange={(event) => this.handleImageUrl(event)} />
            </FormControl>
            <FormControl>
              <div>Description:</div>
              <TextareaAutosize rows={3} onChange={(event) => this.handleDescription(event)} />
            </FormControl>
            <FormControl>
              <div>Tags:</div>
              <Select multiple value={this.state.tags}
                renderValue={selected => selected.join(', ')} onChange={(event) => this.handleTagSelect(event)}>
                {
                  this.state.listTags.map((tag, index) => (
                    <MenuItem key={index} value={tag.tag}>
                      <Checkbox checked={this.state.tags.indexOf(tag.tag) > -1} />
                      <ListItemText primary={`${tag.category} > ${tag.topic} > ${tag.tag}`} />
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl>
              <div>Whay will learn (press 'Enter' to add more item):</div>
              <TextField margin="normal" onKeyDown={(event) => this.handleAddWhatWillLearn(event)} />
              <div>
                {
                  this.state.what_will_learn.map((item, index) =>
                    <div key={index}><Chip color="primary" label={item}
                      onDelete={(event) => this.handleDeleteWhatWillLearn(event, item)} /></div>)
                }
              </div>
            </FormControl>
          </div>

          <div>
            <h2>Course details information:</h2>
            <FormControl>
              <div>Number of lectures:</div>
              <TextField margin="normal" onChange={(event) => this.handleNLectures(event)} />
            </FormControl>
            <FormControl>
              <div>Number of hours:</div>
              <TextField margin="normal" onChange={(event) => this.handleNHours(event)} />
            </FormControl>
            <FormControl>
              <div>Rate [0, 5]:</div>
              <TextField margin="normal" onChange={(event) => this.handleRate(event)} />
            </FormControl>
            <FormControl>
              <div>Level:</div>
              <Select value={this.state.level}
                onChange={(event) => this.handleLevelSelect(event)}>
                <MenuItem value={'All level'}><ListItemText primary={'All level'} /></MenuItem>
                <MenuItem value={'Beginner'}><ListItemText primary={'Beginner'} /></MenuItem>
                <MenuItem value={'Intermediate'}><ListItemText primary={'Intermediate'} /></MenuItem>
                <MenuItem value={'Advanced'}><ListItemText primary={'Advanced'} /></MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <div>Has certificate:</div>
              <Select value={this.state.has_certificate}
                onChange={(event) => this.handleHasCertificateSelect(event)}>
                <MenuItem value={true}><ListItemText primary={'Yes'} /></MenuItem>
                <MenuItem value={false}><ListItemText primary={'No'} /></MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <div>Price:</div>
              <TextField margin="normal" onChange={(event) => this.handlePrice(event)} />
            </FormControl>
            <FormControl>
              <div>Author:</div>
              <TextField margin="normal" onChange={(event) => this.handleAuthor(event)} />
            </FormControl>
            <FormControl>
              <div>Platform:</div>
              <Select value={this.state.platform}
                onChange={(event) => this.handlePlatformSelect(event)}>
                {
                  this.state.listPlatforms.map((platform, index) => (
                    <MenuItem key={index} value={platform.name}>
                      <ListItemText primary={platform.name} />
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl>
              <div>Url:</div>
              <TextField margin="normal" onChange={(event) => this.handleUrl(event)} />
            </FormControl>
          </div>

          <div>
            <h2>Review:</h2>
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>

          <div className="g-text-center">
            <Button variant="contained" size="large" color="primary" onClick={() => this.submit()}>
              Submit
            </Button>
          </div>
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default AddCourseView;
