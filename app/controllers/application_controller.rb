class ApplicationController < ActionController::Base
 helper_method :resource_name, :resource, :devise_mapping, :resource_class
def resource_name
  :user
 end
end