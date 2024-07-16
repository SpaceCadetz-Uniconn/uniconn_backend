const sequelize = require('../../config/database');
const User = require('./user');
const Student = require('./student');
const Review = require('./review');
const Advertiser = require('./advertiser');
const AdvertiserCategory = require('./advertiser_category');
const Post = require('./post');
const Job = require('./job');
const JobCategory = require('./job_category');
const Boarding = require('./boarding');
const Event = require('./event');
const Class = require('./class');
const Merchandise = require('./merchandise');
const University = require('./university');
const Attachment = require('./attachment');
const Admin = require('./admin');


// Relationships
Advertiser.hasMany(Review, { foreignKey: 'advertiserId' });
Review.belongsTo(Advertiser, { foreignKey: 'advertiserId' });

Advertiser.belongsToMany(AdvertiserCategory, { through: 'Advertiser_AdvertiserCategory', foreignKey: 'advertiserId' });
AdvertiserCategory.belongsToMany(Advertiser, {  through: 'Advertiser_AdvertiserCategory', foreignKey: 'advertiserCategoryId'});

Student.belongsToMany(Advertiser, { through: 'Student_follows_Advertiser', foreignKey: 'studentId' });
Advertiser.belongsToMany(Student, { through: 'Student_follows_Advertiser', foreignKey: 'advertiserId'});

Job.belongsToMany(JobCategory, { through: 'Job_JobCategory', foreignKey: 'jobId' });
JobCategory.belongsToMany(Job, { through: 'Job_JobCategory', foreignKey: 'jobCategoryId' });

Advertiser.hasMany(Job, { foreignKey: 'advertiserId' });
Job.belongsTo(Advertiser, { foreignKey: 'advertiserId' });

Advertiser.hasMany(Boarding, { foreignKey: 'advertiserId' });
Boarding.belongsTo(Advertiser, { foreignKey: 'advertiserId' });

Advertiser.hasMany(Event, { foreignKey: 'advertiserId' });
Event.belongsTo(Advertiser, { foreignKey: 'advertiserId' });

Student.hasMany(Event, { foreignKey: 'studentId' });
Event.belongsTo(Student, { foreignKey: 'studentId' });

Student.hasMany(Class, { foreignKey: 'studentId' });
Class.belongsTo(Student, { foreignKey: 'studentId' });

Student.hasMany(Merchandise, { foreignKey: 'studentId' });
Merchandise.belongsTo(Student, { foreignKey: 'studentId' });

University.hasMany(Student, { foreignKey: 'universityId' });
Student.belongsTo(University, { foreignKey: 'universityId' });

Student.hasMany(Review, { foreignKey: 'studentId' });
Review.belongsTo(Student, { foreignKey: 'studentId' }); 

Post.hasOne(Job, { foreignKey: 'postId' });
Job.belongsTo(Post, { foreignKey: 'postId' });

Post.hasOne(Boarding, { foreignKey: 'postId' });
Boarding.belongsTo(Post, { foreignKey: 'postId' });

Post.hasOne(Event, { foreignKey: 'postId' });
Event.belongsTo(Post, { foreignKey: 'postId' });

Post.hasOne(Class, { foreignKey: 'postId'});
Class.belongsTo(Post, { foreignKey: 'postId' });

Post.hasOne(Merchandise, { foreignKey: 'postId' });
Merchandise.belongsTo(Post, { foreignKey: 'postId' });

User.hasOne(Student, { foreignKey: 'userId' });
Student.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(Advertiser, { foreignKey: 'userId' });
Advertiser.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(Admin, { foreignKey: 'userId' });
Admin.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Attachment, { foreignKey: 'postId' });
Attachment.belongsTo(Post, { foreignKey: 'postId' });

module.exports = {
  sequelize,
  User,
  Review,
  Advertiser,
  AdvertiserCategory,
  Post,
  Job,
  Boarding,
  Event,
  Class,
  Merchandise,
  University,
  
};
