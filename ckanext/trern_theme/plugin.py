import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit

def get_groups():
    groups = toolkit.get_action('group_list')(data_dict={'all_fields': True})

    return groups

class TrernThemePlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.ITemplateHelpers)

    # IConfigurer

    def update_config(self, config_):
        toolkit.add_template_directory(config_, 'templates')
        toolkit.add_public_directory(config_, 'public')
        toolkit.add_resource('assets','trern_theme')

    def get_helpers(self):
      return {'trern_theme_get_groups': get_groups}