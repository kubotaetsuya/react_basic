# frozen_string_literal: true

class AccountSerializer < ActiveModel::Serializer
  attributes :id,
             :first_name,
             :last_name,
             :email,
             :phone,
             :created_at,
             :updated_at
end
