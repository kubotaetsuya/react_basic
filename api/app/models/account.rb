# frozen_string_literal: true

class Account < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  VALID_PHONE_REGEX = /\A\d{10}$|^\d{11}\z/

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true,
             uniqueness: { case_sensitive: true },
             format: { with: VALID_EMAIL_REGEX }
  validates :phone, presence: true,
             uniqueness: { case_sensitive: true },
             length: { in: 10..11 },
             format: { with: VALID_PHONE_REGEX }
end
